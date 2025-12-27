from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.equipment import Equipment
from app.schemas.equipment import EquipmentCreate

router = APIRouter()


@router.post("/")
def create_equipment(
    payload: EquipmentCreate,
    db: Session = Depends(get_db)
):
    existing = db.query(Equipment).filter(
        Equipment.serial_number == payload.serial_number
    ).first()

    if existing:
        raise HTTPException(400, "Serial number already exists")

    equipment = Equipment(**payload.dict())
    db.add(equipment)
    db.commit()
    db.refresh(equipment)

    return equipment


@router.get("/")
def list_equipment(db: Session = Depends(get_db)):
    return db.query(Equipment).all()
