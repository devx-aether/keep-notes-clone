# TODO
# 1. End points
#   POST /notes
#   GET /notes
#   PATCH /notes/{id}
#   DELETE /notes/{id}

from uuid import UUID

from fastapi import FastAPI, HTTPException
from schemas import CreateNote, UpdateNote
import database as db


app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "hello world"}

@app.get("/notes")
async def get_notes(search_str: str = ""):
    notes = db.get_notes(search_str)
    return {"notes": notes}

@app.get("/notes/{id}")
async def get_note(id: UUID):
    note = db.get_note(id)
    if not note:
        raise HTTPException(404, detail="Note not found")
    return {"notes": note}
    
@app.post("/notes")
async def create_note(note: CreateNote):
    db.add_note(note)

@app.patch("/notes/{id}")
async def update_note(id: UUID, update: UpdateNote):
    if not db.update_note(id, update.body, update.title):
        raise HTTPException(404, detail="Note not found")

@app.delete("/notes/{id}")
async def delete_note(id: UUID):
    if not db.delete_note(id):
        raise HTTPException(404, detail="Note not found")
