from abc import ABC, abstractmethod

from sqlalchemy.ext.asyncio import AsyncSession

from repositories.example import ExampleRepository


class UnitOfWorkInterface(ABC):
    example_repo: ExampleRepository

    @abstractmethod
    async def __aenter__(self):
        raise NotImplementedError

    @abstractmethod
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        raise NotImplementedError

    @abstractmethod
    async def commit(self):
        raise NotImplementedError

    @abstractmethod
    async def rollback(self):
        raise NotImplementedError


class UnitOfWork(UnitOfWorkInterface):
    def __init__(self, session: AsyncSession):
        self.session = session

    async def __aenter__(self):
        self.example_repo = ExampleRepository(self.session)

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        pass

    async def commit(self):
        await self.session.commit()

    async def rollback(self):
        await self.session.rollback()
