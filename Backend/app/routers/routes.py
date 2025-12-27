from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["API"])

# =========================
# A. EQUIPMENT ROUTES (6)
# =========================

@router.post("/equipment")
def create_equipment(payload: dict):
    return {"message": "Equipment created"}

@router.get("/equipment")
def list_equipment():
    return {"message": "List of equipment"}

@router.get("/equipment/{id}")
def get_equipment(id: int):
    return {"message": f"Equipment {id}"}

@router.put("/equipment/{id}")
def update_equipment(id: int, payload: dict):
    return {"message": f"Equipment {id} updated"}

@router.get("/equipment/{id}/maintenance-requests")
def equipment_maintenance_requests(id: int):
    return {"message": f"Maintenance requests for equipment {id}"}

@router.get("/equipment/{id}/maintenance-count")
def equipment_maintenance_count(id: int):
    return {"count": 0}


# =========================
# B. MAINTENANCE TEAMS (4)
# =========================

@router.post("/maintenance-teams")
def create_maintenance_team(payload: dict):
    return {"message": "Maintenance team created"}

@router.get("/maintenance-teams")
def list_maintenance_teams():
    return {"message": "List of maintenance teams"}

@router.post("/maintenance-teams/{id}/members")
def add_team_member(id: int, payload: dict):
    return {"message": f"Member added to team {id}"}

@router.delete("/maintenance-teams/{id}/members/{user_id}")
def remove_team_member(id: int, user_id: int):
    return {"message": f"User {user_id} removed from team {id}"}


# =========================
# C. MAINTENANCE REQUESTS (7)
# =========================

@router.post("/maintenance-requests")
def create_maintenance_request(payload: dict):
    return {"message": "Maintenance request created"}

@router.get("/maintenance-requests")
def list_maintenance_requests():
    return {"message": "List of maintenance requests"}

@router.put("/maintenance-requests/{id}/assign")
def assign_maintenance_request(id: int, payload: dict):
    return {"message": f"Request {id} assigned"}

@router.put("/maintenance-requests/{id}/start")
def start_maintenance_request(id: int):
    return {"message": f"Request {id} moved to In Progress"}

@router.put("/maintenance-requests/{id}/complete")
def complete_maintenance_request(id: int):
    return {"message": f"Request {id} marked Repaired"}

@router.put("/maintenance-requests/{id}/scrap")
def scrap_maintenance_request(id: int):
    return {"message": f"Request {id} scrapped & equipment flagged"}

@router.get("/maintenance-requests/kanban")
def maintenance_kanban_view():
    return {
        "new": [],
        "in_progress": [],
        "repaired": [],
        "scrap": []
    }
