from dependency_injector import containers, providers

from db.database import get_session
from repositories.auth import AuthRepository
from services.auth import SessionAuthService


class Container(containers.DeclarativeContainer):
    async_session = providers.Resource(
        get_session,
    )

    auth_repo = providers.Factory(
        AuthRepository,
        async_session,
    )

    session_auth_service = providers.Factory(
        SessionAuthService,
        auth_repo,
    )
