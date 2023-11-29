#!/bin/bash
cd /app/backend
alembic upgrade head
cd /app/backend/src
gunicorn app.main.main:app --worker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000
