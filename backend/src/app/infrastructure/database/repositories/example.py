from typing import List

from sqlalchemy import select
from sqlalchemy.orm import joinedload

from app.infrastructure.database.interfaces.repositories.example import (
    ExampleRepositoryInterface,
)
from app.infrastructure.database.models.example import Example


class ExampleRepository(ExampleRepositoryInterface):
    async def get_example_list(self) -> List[Example]:
        query = select(Example)
        result = await self._session.execute(query)
        return result.scalars().all()

    async def get_example_detail(self, example_id: int) -> Example:
        query = select(Example).where(Example.id == example_id).options(joinedload(Example.photos))
        result = await self._session.execute(query)
        return result.scalar()
