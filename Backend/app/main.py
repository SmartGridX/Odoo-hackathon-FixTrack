from fastapi import FastAPI
from app.routers.routes import router

app = FastAPI(title="FixTrack API")

app.include_router(router)
