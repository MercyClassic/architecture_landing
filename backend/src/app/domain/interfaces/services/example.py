from abc import ABC, abstractmethod


class ExampleServiceInterface(ABC):
    @abstractmethod
    async def get_all(self):
        raise NotImplementedError

    @abstractmethod
    async def get_one(
        self,
        example_id: int,
    ):
        raise NotImplementedError
