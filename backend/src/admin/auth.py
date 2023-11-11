from dependency_injector.wiring import Provide, inject
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request

from container import Container
from services.auth import AuthServiceInterface, SessionAuthService


class AdminAuth(AuthenticationBackend):
    @inject
    def __init__(
        self,
        auth_service: SessionAuthService = Provide[Container.session_auth_service],
        *args,
        **kwargs,
    ):
        super().__init__(*args, **kwargs)
        self.auth_service = auth_service

    async def login(self, request: Request) -> bool:
        form = await request.form()
        username, password = form['username'], form['password']
        token = self.auth_service.login(username, password)
        request.session.update({'token': token})
        return True

    async def logout(self, request: Request) -> bool:
        await self.auth_service.logout(request.session.get('token'))
        return True

    async def authenticate(self, request: Request) -> bool:
        token = request.session.get('token')
        if not token or not self.auth_service.authenticate(token):
            return False
        return True


authentication_backend = AdminAuth(
    secret_key='...',
)
