from abc import ABC, abstractmethod

from app.infrastructure.database.interfaces.repositories.sqlalchemy_gateway import (
    SQLAlchemyBaseGateway,
)


class ExampleRepositoryInterface(SQLAlchemyBaseGateway, ABC):
    @abstractmethod
    async def get_example_list(self):
        raise NotImplementedError

    @abstractmethod
    async def get_example_detail(self, example_id: int):
        raise NotImplementedError
