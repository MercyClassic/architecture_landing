import os
from pathlib import Path

from fastapi_storages import FileSystemStorage as FapiFileSystemStorage

from config import get_config


class FileSystemStorage(FapiFileSystemStorage):
    def __init__(
        self,
        relative_path: str,
        root_dir: str = None,
    ) -> None:
        self._path = Path(os.path.join(root_dir, relative_path))
        self._path.mkdir(parents=True, exist_ok=True)


file_system_storage = FileSystemStorage(
    relative_path='media/images',
    root_dir=get_config().ROOT_DIR,
)
