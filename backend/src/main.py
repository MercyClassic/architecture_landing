import logging
from logging import config

from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator
from starlette import status
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from admin.configure import configure_admin
from config import LOGGING_CONFIG, get_config
from container import Container
from db.database import engine, get_session
from dependencies.auth import get_auth_service
from dependencies.example import get_example_service, get_uow
from dependencies.stub import get_session_stub
from routers.example import router as example_router
from services.auth import AuthServiceInterface
from services.example import ExampleServiceInterface
from uow import UnitOfWorkInterface

config.dictConfig(LOGGING_CONFIG)
logger = logging.getLogger(__name__)


app = FastAPI(title='architecture_landing')

app.dependency_overrides[UnitOfWorkInterface] = get_uow
app.dependency_overrides[get_session_stub] = get_session
app.dependency_overrides[ExampleServiceInterface] = get_example_service
app.dependency_overrides[AuthServiceInterface] = get_auth_service

app.include_router(example_router)

container = Container()
container.wire(modules=['admin.auth'])
config = container.config()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        *config.DEV_HOSTS,
        *config.PROD_HOSTS,
    ],
    allow_credentials=True,
    allow_methods=['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH', 'PUT'],
    allow_headers=[
        'Content-Type',
        'Set-Cookie',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin',
        'Authorization',
        'X-CSRFToken',
    ],
)


@app.exception_handler(Exception)
async def unexpected_error_log(request, ex):
    logger.error(ex)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content=None,
    )


Instrumentator().instrument(app).expose(app)

configure_admin(
    app,
    engine,
    auth_secret_key=config.AUTH_SECRET_KEY,
)
