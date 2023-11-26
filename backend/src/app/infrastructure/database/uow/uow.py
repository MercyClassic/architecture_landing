from sqlalchemy.ext.asyncio import AsyncSession

from app.infrastructure.database.interfaces.uow.uow import UnitOfWorkInterface
from app.infrastructure.database.repositories.example import ExampleRepository


class UnitOfWork(UnitOfWorkInterface):
    def __init__(self, session: AsyncSession):
        self.session = session
        self.example_repo = ExampleRepository(self.session)

    async def commit(self):
        await self.session.commit()

    async def rollback(self):
        await self.session.rollback()
