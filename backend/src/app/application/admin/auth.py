from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request

from app.application.interfaces.services.auth import AuthServiceInterface


class AdminAuthBackend(AuthenticationBackend):
    def __init__(
        self,
        secret_key: str,
        auth_service: AuthServiceInterface,
    ):
        super().__init__(secret_key=secret_key)
        self.auth_service = auth_service

    async def login(
        self,
        request: Request,
    ) -> bool:
        form = await request.form()
        username, password = form['username'], form['password']
        token = await self.auth_service.login(username, password)
        request.session.update({'token': token})
        return True

    async def logout(
        self,
        request: Request,
    ) -> bool:
        await self.auth_service.logout(request.session.get('token'))
        return True

    async def authenticate(
        self,
        request: Request,
    ) -> bool:
        token = request.session.get('token')
        if not token:
            return False
        is_auth = await self.auth_service.authenticate(token)
        return is_auth
