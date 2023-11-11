from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from dependencies.stub import get_session_stub
from repositories.auth import AuthRepository
from services.auth import SessionAuthService


async def get_auth_service(
    session: Annotated[AsyncSession, Depends(get_session_stub)],
):
    return SessionAuthService(AuthRepository(session))
