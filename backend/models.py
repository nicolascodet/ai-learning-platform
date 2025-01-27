from pydantic import BaseModel

class Item(BaseModel):
    id: int | None = None
    title: str
    description: str
    completed: bool = False 