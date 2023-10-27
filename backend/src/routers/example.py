from typing import Annotated

from fastapi import APIRouter, Depends

from services.example import ExampleServiceInterface
from uow import UnitOfWorkInterface

router = APIRouter(
    prefix='/api/v1',
)


@router.get('/examples')
async def get_examples(
    uow: Annotated[UnitOfWorkInterface, Depends()],
    service: Annotated[ExampleServiceInterface, Depends()],
):
    data = await service.get_all(uow)
    print(data)
    return {}


@router.get('/examples/{example_id}')
async def get_example(
    uow: Annotated[UnitOfWorkInterface, Depends()],
    service: Annotated[ExampleServiceInterface, Depends()],
    example_id: int,
):
    data = await service.get_one(uow, example_id)
    print(data)
    return {}
