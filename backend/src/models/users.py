import datetime
from typing import List

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from db.database import Base


class AdminUser(Base):
    __tablename__ = 'admin_user'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str]
    password: Mapped[str]

    tokens: Mapped[List['AuthToken']] = relationship(back_populates='user')


class AuthToken(Base):
    __tablename__ = 'auth_token'

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('admin_user.id'))
    token: Mapped[str]
    exp_at: Mapped[datetime.datetime]

    user: Mapped[AdminUser] = relationship(back_populates='tokens')
