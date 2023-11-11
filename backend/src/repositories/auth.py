from abc import ABC, abstractmethod
from datetime import datetime

from sqlalchemy import delete, insert, select
from sqlalchemy.ext.asyncio import AsyncSession

from models.users import AdminUser, AuthToken


class AuthRepositoryInterface(ABC):
    @abstractmethod
    async def is_token_in_db(self, token: str) -> bool:
        raise NotImplementedError

    @abstractmethod
    async def get_user(self, username: str) -> AdminUser:
        raise NotImplementedError

    @abstractmethod
    async def save_token(self, token: str, exp_at: datetime) -> None:
        raise NotImplementedError

    @abstractmethod
    async def delete_token(self, token: str) -> None:
        raise NotImplementedError


class AuthRepository(AuthRepositoryInterface):
    def __init__(self, session: AsyncSession):
        self.session = session

    async def is_token_in_db(self, token: str) -> bool:
        query = select(1).where(AuthToken.token == token)
        result = await self.session.execute(query)
        return bool(result)

    async def get_user(self, username: str) -> AdminUser:
        query = select(AdminUser).where(AdminUser.username == username)
        result = await self.session.execute(query)
        user = result.scalar()
        return user

    async def save_token(self, token: str, exp_at: datetime) -> None:
        stmt = insert(AuthToken).values(token=token)
        await self.session.execute(stmt)
        await self.session.commit()

    async def delete_token(self, token: str) -> None:
        stmt = delete(AuthToken).where(AuthToken.token == token)
        await self.session.execute(stmt)
        await self.session.commit()
