from fastapi import FastAPI
from sqladmin import Admin
from sqladmin.authentication import AuthenticationBackend
from sqlalchemy.ext.asyncio import AsyncEngine


def configure_admin(
    app: FastAPI,
    engine: AsyncEngine,
    auth_backend: AuthenticationBackend,
):
    from admin.example import ExampleAdmin, ExamplePhotoAdmin

    admin = Admin(
        app,
        engine,
        authentication_backend=auth_backend,
    )

    admin.add_view(ExampleAdmin)
    admin.add_view(ExamplePhotoAdmin)
