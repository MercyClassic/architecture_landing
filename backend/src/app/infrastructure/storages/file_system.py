import os
from pathlib import Path

from fastapi_storages import FileSystemStorage as FapiFileSystemStorage

from app.application.config import get_config


class FileSystemStorage(FapiFileSystemStorage):
    def __init__(
        self,
        relative_path: str,
        root_dir: str = None,
    ) -> None:
        self._path = Path(os.path.join(root_dir, relative_path))
        self._path.mkdir(parents=True, exist_ok=True)
        self._relative_path = relative_path

    def get_path(self, name: str) -> str:
        return str(self._relative_path / Path(name))


def get_file_system_storage():
    return FileSystemStorage(
        relative_path='media/images',
        root_dir=get_config().ROOT_DIR,
    )
