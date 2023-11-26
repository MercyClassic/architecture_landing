from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.domain.services.auth import SessionAuthService
from app.infrastructure.database.repositories.auth import AuthRepository
from app.main.di.dependencies.stub import get_session_stub


async def get_auth_service(
    session: Annotated[AsyncSession, Depends(get_session_stub)],
):
    return SessionAuthService(AuthRepository(session))
