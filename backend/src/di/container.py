from dependency_injector import containers, providers
from sqlalchemy.ext.asyncio import create_async_engine

from admin.auth import AdminAuthBackend
from config import Config
from db.database import create_session_maker, get_session
from repositories.auth import AuthRepository
from services.auth import SessionAuthService


class Container(containers.DeclarativeContainer):
    config = providers.Factory(
        Config,
    )

    database_url = providers.Factory(
        lambda config: 'postgresql+asyncpg://%s:%s@%s:5432/%s'
        % (
            config.POSTGRES_USER,
            config.POSTGRES_PASSWORD,
            config.POSTGRES_HOST,
            config.POSTGRES_DB,
        ),
        config,
    )

    async_engine = providers.Factory(
        create_async_engine,
        database_url,
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
        secret_key=config().AUTH_SECRET_KEY,
        auth_service=session_auth_service,
    )