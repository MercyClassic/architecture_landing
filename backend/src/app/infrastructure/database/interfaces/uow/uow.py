from abc import ABC, abstractmethod

from app.infrastructure.database.repositories.example import ExampleRepositoryInterface


class UnitOfWorkInterface(ABC):
    example_repo: ExampleRepositoryInterface

    @abstractmethod
    async def commit(self):
        raise NotImplementedError

    @abstractmethod
    async def rollback(self):
        raise NotImplementedError
