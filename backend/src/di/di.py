from functools import partial

from fastapi import FastAPI
from sqlalchemy.ext.asyncio import async_sessionmaker

from db.database import get_session
from dependencies.auth import get_auth_service
from dependencies.example import get_example_service, get_uow
from dependencies.stub import get_session_stub
from services.auth import AuthServiceInterface
from services.example import ExampleServiceInterface
from uow import UnitOfWorkInterface


def init_dependencies(app: FastAPI, async_session_maker: async_sessionmaker) -> None:
    app.dependency_overrides[get_session_stub] = partial(
        get_session,
        async_session_maker,
    )
    app.dependency_overrides[UnitOfWorkInterface] = get_uow
    app.dependency_overrides[ExampleServiceInterface] = get_example_service
    app.dependency_overrides[AuthServiceInterface] = get_auth_service
