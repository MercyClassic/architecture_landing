from typing import Annotated

from fastapi import Depends

from app.domain.services.example import ExampleService
from app.infrastructure.database.interfaces.uow import UnitOfWorkInterface
from app.main.di.dependencies.uow import get_uow


async def get_example_service(
    uow: Annotated[UnitOfWorkInterface, Depends(get_uow)],
) -> ExampleService:
    return ExampleService(uow)
