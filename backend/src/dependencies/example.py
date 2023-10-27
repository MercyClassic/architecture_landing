from typing import Annotated

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from dependencies.stub import get_session_stub
from services.example import ExampleService
from uow import UnitOfWork


async def get_uow(
    session: Annotated[AsyncSession, Depends(get_session_stub)],
) -> UnitOfWork:
    return UnitOfWork(session)


async def get_example_service() -> ExampleService:
    return ExampleService()
