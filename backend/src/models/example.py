from typing import List

from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from db.database import Base


class Example(Base):
    __tablename__ = 'example_of_work'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    main_photo: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(String(2000))
    photos: Mapped[List['ExamplePhoto']] = relationship(
        'ExamplePhoto',
        back_populates='example',
    )


class ExamplePhoto(Base):
    __tablename__ = 'example_photo'
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    path: Mapped[str] = mapped_column(String(200))
    example_id: Mapped[int] = mapped_column(ForeignKey('example_of_work.id'))
    example: Mapped['Example'] = relationship(
        'Example',
        back_populates='photos',
    )
