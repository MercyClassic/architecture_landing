from abc import ABC, abstractmethod

from uow import UnitOfWorkInterface


class ExampleServiceInterface(ABC):
    @abstractmethod
    async def get_all(
        self,
        uow: UnitOfWorkInterface,
    ):
        raise NotImplementedError

    @abstractmethod
    async def get_one(
        self,
        uow: UnitOfWorkInterface,
        example_id: int,
    ):
        raise NotImplementedError


class ExampleService(ExampleServiceInterface):
    async def get_all(
        self,
        uow: UnitOfWorkInterface,
    ):
        async with uow:
            data = await uow.example_repo.get_example_list()
        return data

    async def get_one(
        self,
        uow: UnitOfWorkInterface,
        example_id: int,
    ):
        async with uow:
            data = await uow.example_repo.get_example_detail(example_id)
        return data
