from abc import ABC, abstractmethod
from datetime import datetime

from app.infrastructure.database.interfaces.repositories.sqlalchemy_gateway import (
    SQLAlchemyBaseGateway,
)
from app.infrastructure.database.models.users import AdminUser, AuthToken


class AuthRepositoryInterface(SQLAlchemyBaseGateway, ABC):
    @abstractmethod
    async def get_token(self, token: str) -> AuthToken:
        raise NotImplementedError

    @abstractmethod
    async def get_user(self, username: str) -> AdminUser:
        raise NotImplementedError

    @abstractmethod
    async def save_token(
        self,
        token: str,
        exp_at: datetime,
        user_id: int,
    ) -> None:
        raise NotImplementedError

    @abstractmethod
    async def delete_token(self, token: str) -> None:
        raise NotImplementedError
