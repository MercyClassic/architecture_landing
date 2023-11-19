from dependency_injector.wiring import Provide, inject
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request

from container import Container
from services.auth import SessionAuthService


class AdminAuthBackend(AuthenticationBackend):
    @inject
    async def login(
        self,
        request: Request,
        auth_service: SessionAuthService = Provide[Container.session_auth_service],
    ) -> bool:
        form = await request.form()
        username, password = form['username'], form['password']
        token = await auth_service.login(username, password)
        request.session.update({'token': token})
        return True

    @inject
    async def logout(
        self,
        request: Request,
        auth_service: SessionAuthService = Provide[Container.session_auth_service],
    ) -> bool:
        await auth_service.logout(request.session.get('token'))
        return True

    @inject
    async def authenticate(
        self,
        request: Request,
        auth_service: SessionAuthService = Provide[Container.session_auth_service],
    ) -> bool:
        token = request.session.get('token')
        if not token:
            return False
        is_auth = await auth_service.authenticate(token)
        return is_auth
