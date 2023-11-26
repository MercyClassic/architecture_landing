import asyncio
from functools import partial
from typing import AsyncGenerator

import pytest
from dependency_injector import providers
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.pool import NullPool

from app.application.config import Config
from app.infrastructure.database.database import Base
from app.infrastructure.storages import FileSystemStorage
from app.main.di.container import Container
from app.main.di.dependencies.stub import get_session_stub
from app.main.main import app


def create_test_session_maker(engine: AsyncEngine):
    return async_sessionmaker(
        engine,
        class_=AsyncSession,
        autoflush=False,
        expire_on_commit=False,
    )


async def override_get_session(
    test_async_session_maker: async_sessionmaker,
) -> AsyncGenerator:
    async with test_async_session_maker() as session:
        yield session


class TestContainer(Container):
    config = providers.Factory(
        Config,
    )

    database_url = providers.Factory(
        lambda config: 'postgresql+asyncpg://%s:%s@%s:5432/%s'
        % (
            config.POSTGRES_USER_TEST,
            config.POSTGRES_PASSWORD_TEST,
            config.POSTGRES_HOST_TEST,
            config.POSTGRES_DB_TEST,
        ),
        config,
    )

    async_engine = providers.Factory(
        create_async_engine,
        database_url,
        poolclass=NullPool,
    )

    async_session_maker = providers.Factory(
        create_test_session_maker,
        async_engine,
    )

    async_session = providers.Resource(
        override_get_session,
        async_session_maker,
    )


container = TestContainer()
test_engine = container.async_engine()
Base.metadata.bind = test_engine


app.dependency_overrides[get_session_stub] = partial(
    override_get_session,
    container.async_session_maker(),
)


@pytest.fixture(scope='module')
async def test_session() -> AsyncSession:
    maker = container.async_session_maker()
    async with maker() as session:
        yield session


@pytest.fixture(autouse=True, scope='module')
async def prepare_database():
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest.fixture(scope='module')
def event_loop(request):
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope='module')
async def client() -> AsyncGenerator[AsyncClient, None]:
    async with AsyncClient(app=app, base_url='http://test/') as client:
        yield client


def get_test_file_system_storage():
    return FileSystemStorage(
        relative_path='media/test_images',
        root_dir=container.config().ROOT_DIR,
    )
