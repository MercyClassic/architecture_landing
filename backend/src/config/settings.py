from typing import List

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=('.env', '../.env'), extra='ignore')
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_DB: str
    MEDIA_PATH: str = 'media/images/'
    DEV_HOSTS: str | List[str]
    PROD_HOSTS: str | List[str]

    @field_validator('DEV_HOSTS')
    def prepare_dev_hosts(cls, value):
        return [f'http://{host}' for host in value.split(', ')]

    @field_validator('PROD_HOSTS')
    def prepare_prod_hosts(cls, value):
        return [f'https://{host}' for host in value.split(', ')]


def get_settings() -> Settings:
    return Settings()
