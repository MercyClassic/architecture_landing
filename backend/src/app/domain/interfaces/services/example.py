from abc import ABC, abstractmethod

from app.infrastructure.database.uow.uow import UnitOfWorkInterface


class ExampleServiceInterface(ABC):
    def __init__(
        self,
        uow: UnitOfWorkInterface,
    ):
        self.uow = uow

    @abstractmethod
    async def get_all(self):
        raise NotImplementedError

    @abstractmethod
    async def get_one(
        self,
        example_id: int,
    ):
        raise NotImplementedError
