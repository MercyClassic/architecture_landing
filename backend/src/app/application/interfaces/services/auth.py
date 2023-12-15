from abc import ABC, abstractmethod


class AuthServiceInterface(ABC):
    @staticmethod
    @abstractmethod
    async def _check_password(
        input_password: str,
        password_from_db: str,
    ) -> bool:
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    async def _make_token() -> str:
        raise NotImplementedError

    @abstractmethod
    async def authenticate(self, token: str) -> bool:
        raise NotImplementedError

    @abstractmethod
    async def login(self, username: str, password: str) -> str:
        """RETURNS TOKEN"""
        raise NotImplementedError

    @abstractmethod
    async def logout(self, token: str) -> None:
        raise NotImplementedError
