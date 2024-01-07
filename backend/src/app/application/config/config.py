import logging
import os
from dataclasses import dataclass
from pathlib import Path
from typing import List

logger = logging.getLogger(__name__)


class ConfigParseError(ValueError):
    pass


@dataclass
class Config:
    DEV_HOSTS: str | List[str]
    PROD_HOSTS: str | List[str]

    AUTH_SECRET_KEY: str

    ROOT_DIR: str = '%s' % Path(__file__).parent.parent.parent

    def __post_init__(self):
        self.DEV_HOSTS = [f'http://{host}' for host in self.DEV_HOSTS.split(', ')]
        self.PROD_HOSTS = [f'https://{host}' for host in self.PROD_HOSTS.split(', ')]


def get_str_env(key: str) -> str:
    value = os.getenv(key)
    if not value:
        logger.error(f'{key} is not set')
        raise ConfigParseError(f'{key} is not set')
    return value


def load_config():
    return Config(
        DEV_HOSTS=get_str_env('DEV_HOSTS'),
        PROD_HOSTS=get_str_env('PROD_HOSTS'),
        AUTH_SECRET_KEY=get_str_env('AUTH_SECRET_KEY'),
    )
