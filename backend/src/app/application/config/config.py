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

    ROOT_DIR: str = '%s' % Path(__file__).parent.parent.parent

    AUTH_SECRET_KEY: str

    @property
    def db_uri(self) -> str:
        return 'postgresql+asyncpg://%s:%s@%s:5432/%s' % (
            self.POSTGRES_USER,
            self.POSTGRES_PASSWORD,
            self.POSTGRES_HOST,
            self.POSTGRES_DB,
        )

    @property
    def test_db_uri(self) -> str:
        return 'postgresql+asyncpg://%s:%s@%s:5432/%s' % (
            self.POSTGRES_USER_TEST,
            self.POSTGRES_PASSWORD_TEST,
            self.POSTGRES_HOST_TEST,
            self.POSTGRES_DB_TEST,
        )

    @field_validator('DEV_HOSTS')
    def prepare_dev_hosts(cls, value):
        return [f'http://{host}' for host in value.split(', ')]

    @field_validator('PROD_HOSTS')
    def prepare_prod_hosts(cls, value):
        return [f'https://{host}' for host in value.split(', ')]


def get_config() -> Config:
    return Config()
