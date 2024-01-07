import os

from dependency_injector import containers, providers
from sqlalchemy.ext.asyncio import create_async_engine

from app.application.admin.auth import AdminAuthBackend
from app.application.services.auth import SessionAuthService
from app.infrastructure.database.database import create_session_maker, get_session
from app.infrastructure.database.repositories.auth import AuthRepository


class Container(containers.DeclarativeContainer):
    async_engine = providers.Factory(
        create_async_engine,
        os.environ['db_uri'],
        echo=True,
    )

    async_session_maker = providers.Factory(
        create_session_maker,
        async_engine,
    )

    async_session = providers.Resource(
        get_session,
        async_session_maker,
    )

    auth_repo = providers.Factory(
        AuthRepository,
        async_session,
    )

    session_auth_service = providers.Factory(
        SessionAuthService,
        auth_repo,
    )

    auth_backend = providers.Factory(
        AdminAuthBackend,
        secret_key=os.environ['AUTH_SECRET_KEY'],
        auth_service=session_auth_service,
    )
