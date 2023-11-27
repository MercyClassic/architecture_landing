from app.application.exceptions.base import NotFound
from app.domain.interfaces.services.example import ExampleServiceInterface
from app.infrastructure.database.interfaces.uow import UnitOfWorkInterface


class ExampleService(ExampleServiceInterface):
    def __init__(
        self,
        uow: UnitOfWorkInterface,
    ):
        self.uow = uow

    async def get_all(self):
        data = await self.uow.example_repo.get_example_list()
        return data

    async def get_one(
        self,
        example_id: int,
    ):
        data = await self.uow.example_repo.get_example_detail(example_id)
        if not data:
            raise NotFound
        return data
