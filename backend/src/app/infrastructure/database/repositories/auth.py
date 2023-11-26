from datetime import datetime

from sqlalchemy import delete, insert, select

from app.infrastructure.database.interfaces.repositories.auth import (
    AuthRepositoryInterface,
)
from app.infrastructure.database.models.users import AdminUser, AuthToken


class AuthRepository(AuthRepositoryInterface):
    async def get_token(self, token: str) -> AuthToken:
        query = select(AuthToken).where(AuthToken.token == token)
        result = await self._session.execute(query)
        return result.scalar()

    async def get_user(self, username: str) -> AdminUser:
        query = select(AdminUser).where(AdminUser.username == username)
        result = await self._session.execute(query)
        user = result.scalar()
        return user

    async def save_token(
        self,
        token: str,
        exp_at: datetime,
        user_id: int,
    ) -> None:
        stmt = insert(AuthToken).values(
            token=token,
            exp_at=exp_at,
            user_id=user_id,
        )
        await self._session.execute(stmt)
        await self._session.commit()

    async def delete_token(self, token: str) -> None:
        stmt = delete(AuthToken).where(AuthToken.token == token)
        await self._session.execute(stmt)
        await self._session.commit()
