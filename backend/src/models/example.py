from typing import List

from fastapi_storages.integrations.sqlalchemy import FileType
from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from db.database import Base
from storages import file_system_storage


class Example(Base):
    __tablename__ = 'example_of_work'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    image: Mapped[str] = mapped_column(FileType(storage=file_system_storage))
    description: Mapped[str] = mapped_column(String(2000))
    photos: Mapped[List['ExamplePhoto']] = relationship(
        'ExamplePhoto',
        back_populates='example',
    )

    def __repr__(self):
        return f'Object id: {self.id}'


class ExamplePhoto(Base):
    __tablename__ = 'example_photo'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    image: Mapped[str] = mapped_column(FileType(storage=file_system_storage))
    example_id: Mapped[int] = mapped_column(ForeignKey('example_of_work.id'))
    example: Mapped['Example'] = relationship(
        'Example',
        back_populates='photos',
    )

    def __repr__(self):
        return f'Object id: {self.id}, image: {self.image}'
