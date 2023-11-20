from pathlib import Path
from typing import List

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Config(BaseSettings):
    model_config = SettingsConfigDict(env_file=('.env', '../.env'), extra='ignore')
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_DB: str

    POSTGRES_USER_TEST: str
    POSTGRES_PASSWORD_TEST: str
    POSTGRES_HOST_TEST: str
    POSTGRES_DB_TEST: str

    DEV_HOSTS: str | List[str]
    PROD_HOSTS: str | List[str]

    ROOT_DIR: str = '%s' % Path(__file__).parent.parent

    AUTH_SECRET_KEY: str

    @field_validator('DEV_HOSTS')
    def prepare_dev_hosts(cls, value):
        return [f'http://{host}' for host in value.split(', ')]

    @field_validator('PROD_HOSTS')
    def prepare_prod_hosts(cls, value):
        return [f'https://{host}' for host in value.split(', ')]


def get_config() -> Config:
    return Config()
