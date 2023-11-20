import io
from typing import List

import pytest
from fastapi import UploadFile
from fastapi.encoders import jsonable_encoder
from httpx import AsyncClient
from pydantic import TypeAdapter
from sqlalchemy import insert, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload

from models.example import Example, ExamplePhoto
from schemas.example import ExampleDetailSchema, ExampleListSchema


class ExampleTests:
    @pytest.fixture(scope='module', autouse=True)
    async def setup(self, test_session: AsyncSession):
        await test_session.execute(
            insert(Example).values(
                id=1,
                description='description',
                image=UploadFile(file=io.BytesIO(b'123'), filename='test.jpg'),
            ),
        )
        await test_session.execute(
            insert(ExamplePhoto).values(
                id=1,
                example_id=1,
                image=UploadFile(file=io.BytesIO(b'123'), filename='test.jpg'),
            ),
        )
        await test_session.commit()

    @pytest.fixture
    @staticmethod
    async def example_list(test_session: AsyncSession):
        result = await test_session.execute(select(Example))
        return jsonable_encoder(
            TypeAdapter(List[ExampleListSchema]).validate_python(result.scalars().all()),
        )

    @staticmethod
    async def get_example_detail(example_id: int, test_session: AsyncSession):
        result = await test_session.execute(
            select(Example).options(joinedload(Example.photos)).where(Example.id == example_id),
        )
        return jsonable_encoder(TypeAdapter(ExampleDetailSchema).validate_python(result.scalar()))

    async def test_get_example_list(
        self,
        client: AsyncClient,
        example_list,
    ):
        response = await client.get('api/v1/examples')
        assert response.json() == example_list

    @pytest.mark.parametrize(
        'example_id, status_code',
        [
            (1, 200),
            (2, 404),
        ],
    )
    async def test_get_example_detail(
        self,
        example_id: int,
        status_code: int,
        client: AsyncClient,
        test_session: AsyncSession,
        example_list,
    ):
        response = await client.get('api/v1/examples/%s' % example_id)
        assert response.status_code == status_code
        if status_code == 200:
            expect_result = await self.get_example_detail(example_id, test_session)
            assert response.json() == expect_result
