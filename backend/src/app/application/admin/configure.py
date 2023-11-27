from fastapi import FastAPI
from sqladmin import Admin
from sqladmin.authentication import AuthenticationBackend
from sqlalchemy.ext.asyncio import AsyncEngine

from app.application.admin.example import ExampleAdmin, ExamplePhotoAdmin


def configure_admin(
    app: FastAPI,
    engine: AsyncEngine,
    auth_backend: AuthenticationBackend,
):
    admin = Admin(
        app,
        engine,
        authentication_backend=auth_backend,
    )

    admin.add_view(ExampleAdmin)
    admin.add_view(ExamplePhotoAdmin)
