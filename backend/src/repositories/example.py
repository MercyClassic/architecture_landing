from abc import ABC, abstractmethod
from typing import List

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload

from models.example import Example


class ExampleRepositoryInterface(ABC):
    @abstractmethod
    async def get_example_list(self):
        raise NotImplementedError

    @abstractmethod
    async def get_example_detail(self, example_id: int):
        raise NotImplementedError


class ExampleRepository(ExampleRepositoryInterface):
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_example_list(self) -> List[Example]:
        query = select(Example)
        result = await self.session.execute(query)
        return result.scalars().all()

    async def get_example_detail(self, example_id: int) -> Example:
        query = select(Example).where(Example.id == example_id).options(joinedload(Example.photos))
        result = await self.session.execute(query)
        return result.scalar()
