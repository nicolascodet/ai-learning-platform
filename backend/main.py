from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from app.models import Item

app = FastAPI(
    title="AI Learning Platform API",
    description="API for the AI Learning Platform",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for demo
items: List[Item] = []

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/items/", response_model=Item)
async def create_item(item: Item):
    item.id = len(items) + 1
    items.append(item)
    return item

@app.get("/api/items/", response_model=List[Item])
async def list_items():
    return items

@app.get("/api/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    if 0 <= item_id - 1 < len(items):
        return items[item_id - 1]
    raise HTTPException(status_code=404, detail="Item not found") 