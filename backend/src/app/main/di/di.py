from functools import partial

from fastapi import FastAPI
from sqlalchemy.ext.asyncio import async_sessionmaker

from app.domain.interfaces.services.auth import AuthServiceInterface
from app.domain.interfaces.services.example import ExampleServiceInterface
from app.infrastructure.database.database import get_session
from app.infrastructure.database.interfaces.uow import UnitOfWorkInterface
from app.main.di.dependencies.auth import get_auth_service
from app.main.di.dependencies.example import get_example_service
from app.main.di.dependencies.stub import get_session_stub
from app.main.di.dependencies.uow import get_uow


def init_dependencies(app: FastAPI, async_session_maker: async_sessionmaker) -> None:
    app.dependency_overrides[get_session_stub] = partial(
        get_session,
        async_session_maker,
    )
    app.dependency_overrides[UnitOfWorkInterface] = get_uow
    app.dependency_overrides[ExampleServiceInterface] = get_example_service
    app.dependency_overrides[AuthServiceInterface] = get_auth_service
