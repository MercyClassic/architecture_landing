from fastapi import FastAPI
from sqladmin import Admin
from sqlalchemy.ext.asyncio import AsyncEngine

from admin.auth import AdminAuthBackend
from admin.example import ExampleAdmin, ExamplePhotoAdmin


def configure_admin(
    app: FastAPI,
    engine: AsyncEngine,
    auth_secret_key: str,
):
    admin = Admin(
        app,
        engine,
        authentication_backend=AdminAuthBackend(
            secret_key=auth_secret_key,
        ),
    )

    admin.add_view(ExampleAdmin)
    admin.add_view(ExamplePhotoAdmin)
