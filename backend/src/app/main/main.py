import logging
from contextlib import asynccontextmanager
from logging import config

from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator
from sqlalchemy.ext.asyncio import async_sessionmaker
from starlette import status
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from app.application.admin.configure import configure_admin
from app.application.config import Config, get_logging_dict
from app.main.di.container import Container
from app.main.di.di import init_dependencies
from app.presentators.api.routers.root import root_router


def create_container():
    container = Container()
    container.wire(
        modules=[
            'app.application.admin.auth',
            'app.infrastructure.storages.file_system',
        ],
    )
    return container


container = create_container()

config.dictConfig(get_logging_dict(container.config().ROOT_DIR))
logger = logging.getLogger('main')


@asynccontextmanager
async def lifespan(app: FastAPI):
    configure_admin(
        app,
        container.async_engine(),
        auth_backend=await container.auth_backend(),
    )
    yield


def create_app(async_session_maker: async_sessionmaker) -> FastAPI:
    app = FastAPI(
        title='architecture_landing',
        lifespan=lifespan,
    )
    init_dependencies(app, async_session_maker)
    return app


app = create_app(container.async_session_maker())

app.include_router(root_router)


def add_cors_middleware(app: FastAPI, config: Config) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            *config.DEV_HOSTS,
            *config.PROD_HOSTS,
        ],
        allow_credentials=True,
        allow_methods=['GET', 'OPTIONS'],
        allow_headers=[
            'Content-Type',
            'Set-Cookie',
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin',
            'Authorization',
            'X-CSRFToken',
        ],
    )


add_cors_middleware(app, container.config())


@app.exception_handler(Exception)
async def unexpected_error_log(request, ex):
    logger.error(ex, exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content=None,
    )


Instrumentator().instrument(app).expose(app)
