from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Define request body schema
class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(data: LoginRequest):
    print(f"User tried to log in with email: {data.email}")
    # Just mock success for now
    if data.email == "1" and data.password == "2":
        return {"message": "Login successful"}
    else:
        return {"message": "Invalid credentials"}
