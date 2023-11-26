from fastapi import HTTPException
from starlette import status


class InvalidCredentials(HTTPException):
    def __init__(self):
        super().__init__(
            detail='Could not validate credentials',
            status_code=status.HTTP_401_UNAUTHORIZED,
        )
