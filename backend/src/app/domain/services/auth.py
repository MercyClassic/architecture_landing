import hashlib
import os
from datetime import datetime, timedelta

from app.application.exceptions.auth import InvalidCredentials
from app.domain.interfaces.services.auth import AuthServiceInterface
from app.infrastructure.database.repositories.auth import AuthRepositoryInterface


class SessionAuthService(AuthServiceInterface):
    def __init__(self, auth_repo: AuthRepositoryInterface):
        self._auth_repo = auth_repo

    @staticmethod
    async def _check_password(
        input_password: str,
        password_from_db: str,
    ) -> bool:
        salt_from_db = bytes.fromhex(password_from_db[-64:])
        input_password_hash = hashlib.pbkdf2_hmac(
            'sha256',
            input_password.encode('utf-8'),
            salt_from_db,
            100000,
        )
        user_password = f'{input_password_hash.hex()}{salt_from_db.hex()}'
        return user_password == password_from_db

    @staticmethod
    async def _make_token() -> str:
        return os.urandom(32).hex()

    async def authenticate(self, token: str) -> bool:
        token = await self._auth_repo.get_token(token)
        return datetime.utcnow() < token.exp_at

    async def login(self, username: str, password: str) -> str:
        user = await self._auth_repo.get_user(username)
        if not user or not await self._check_password(password, user.password):
            raise InvalidCredentials
        token = await self._make_token()
        exp_at = datetime.utcnow() + timedelta(days=180)
        await self._auth_repo.save_token(token, exp_at, user.id)
        return token

    async def logout(self, token: str) -> None:
        await self._auth_repo.delete_token(token)
