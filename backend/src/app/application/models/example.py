from typing import List

from pydantic import BaseModel, ConfigDict


class ExampleListSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    image: str


class ExamplePhotoSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    image: str


class ExampleDetailSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    image: str
    description: str
    photos: List[ExamplePhotoSchema]
