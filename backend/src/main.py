import logging
from logging import config

from fastapi import FastAPI
from sqladmin import Admin
from starlette import status
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from admin.example import ExampleAdmin, ExamplePhotoAdmin
from config import LOGGING_CONFIG, get_settings
from db.database import engine, get_session
from dependencies.example import get_example_service, get_uow
from dependencies.stub import get_session_stub
from routers.example import router as example_router
from services.example import ExampleServiceInterface
from uow import UnitOfWorkInterface

config.dictConfig(LOGGING_CONFIG)
logger = logging.getLogger(__name__)


app = FastAPI(title='architecture_landing')

app.dependency_overrides[UnitOfWorkInterface] = get_uow
app.dependency_overrides[get_session_stub] = get_session
app.dependency_overrides[ExampleServiceInterface] = get_example_service


app.include_router(example_router)


settings = get_settings()

origins = [
    *settings.DEV_HOSTS,
    *settings.PROD_HOSTS,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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


admin = Admin(app, engine)

admin.add_view(ExampleAdmin)
admin.add_view(ExamplePhotoAdmin)
