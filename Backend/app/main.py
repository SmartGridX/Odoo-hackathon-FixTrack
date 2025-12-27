from fastapi import FastAPI
from app.database import Base, engine
from app.models import *

# Import routers
from app.routers import (
    equipment,
    teams,
    maintenance_request,
    users,
)

app = FastAPI(
    title="FixTrack API",
    version="1.0.0",
    description="Asset & Maintenance Management System"
)

# Create tables on startup (DEV only)
@app.on_event("startup")
def startup_db():
    Base.metadata.create_all(bind=engine)

# Health check
@app.get("/")
def health():
    return {"status": "ok"}

# =========================
# Register Routers
# =========================

app.include_router(
    equipment.router,
    prefix="/api/equipment",
    tags=["Equipment"]
)

app.include_router(
    teams.router,
    prefix="/api/maintenance-teams",
    tags=["Maintenance Teams"]
)

app.include_router(
    maintenance_request.router,
    prefix="/api/maintenance-requests",
    tags=["Maintenance Requests"]
)

app.include_router(
    users.router,
    prefix="/api/users",
    tags=["Users"]
)
