from pydantic import BaseModel

class CreateNote(BaseModel):
    title: str
    body: str
    # tags later 

class UpdateNote(BaseModel):
    title: str|None = None
    body: str|None = None
