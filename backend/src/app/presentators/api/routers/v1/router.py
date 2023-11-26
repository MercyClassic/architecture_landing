from fastapi import APIRouter

from app.presentators.api.routers.v1.example import router as example_router

v1_router = APIRouter(prefix='/api/v1')

v1_router.include_router(example_router)
