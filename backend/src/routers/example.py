from typing import Annotated, List

from fastapi import APIRouter, Depends
from pydantic import TypeAdapter

from schemas.example import ExampleDetailSchema, ExampleListSchema
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
    data = TypeAdapter(List[ExampleListSchema]).validate_python(data)
    return data


@router.get('/examples/{example_id}')
async def get_example(
    uow: Annotated[UnitOfWorkInterface, Depends()],
    service: Annotated[ExampleServiceInterface, Depends()],
    example_id: int,
):
    data = await service.get_one(uow, example_id)
    data = TypeAdapter(ExampleDetailSchema).validate_python(data)
    return data
