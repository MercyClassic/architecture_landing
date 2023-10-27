from typing import List

from pydantic import BaseModel


class ExampleListSchema(BaseModel):
    id: int
    main_photo: str


class ExamplePhotoSchema(BaseModel):
    path: str


class ExampleDetailSchema(BaseModel):
    id: int
    main_photo: str
    description: str
    photos: List[ExamplePhotoSchema]
