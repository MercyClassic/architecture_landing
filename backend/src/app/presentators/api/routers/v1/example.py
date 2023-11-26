from typing import Annotated, List

from fastapi import APIRouter, Depends
from pydantic import TypeAdapter

from app.application.models.example import ExampleDetailSchema, ExampleListSchema
from app.domain.interfaces.services.example import ExampleServiceInterface

router = APIRouter(
    prefix='/examples',
)


@router.get('')
async def get_examples(
    service: Annotated[ExampleServiceInterface, Depends()],
):
    data = await service.get_all()
    data = TypeAdapter(List[ExampleListSchema]).validate_python(data)
    return data


@router.get('/{example_id}')
async def get_example(
    service: Annotated[ExampleServiceInterface, Depends()],
    example_id: int,
):
    data = await service.get_one(example_id)
    data = TypeAdapter(ExampleDetailSchema).validate_python(data)
    return data
