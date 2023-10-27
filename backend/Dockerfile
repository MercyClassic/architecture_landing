FROM python:3.11-slim-buster

ENV PYTHONDONTWRITEBYTEDECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /app/backend/src
RUN mkdir -p /app/frontend

COPY ./pyproject.toml /app/backend/pyproject.toml

RUN apt update \
    && pip install poetry \
    && apt install -y vim \
    && apt install -y libmagic1 \
    && useradd -U app \
    && chown -R app:app /app \
    && chdir /app/backend \
    && poetry config virtualenvs.create false \
    && poetry install --only main

WORKDIR /app/backend/src

COPY --chown=app:app . /app/backend
COPY --chown=app:app ../docker/entrypoint.sh /app/backend/entrypoint.sh

EXPOSE 8000

USER app

CMD ["sh", "/app/entrypoint.sh"]