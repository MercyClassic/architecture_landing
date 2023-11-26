from fastapi import HTTPException
from starlette import status


class NotFound(HTTPException):
    def __init__(self):
        super().__init__(
            detail='Not Found',
            status_code=status.HTTP_404_NOT_FOUND,
        )
