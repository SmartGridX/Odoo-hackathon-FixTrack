from fastapi import FastAPI
from app.database import Base, engine
from app.models import *

app = FastAPI(title="FixTrack API")

@app.on_event("startup")
def startup_db():
    Base.metadata.create_all(bind=engine)

@app.get("/")
def health():
    return {"status": "ok"}
