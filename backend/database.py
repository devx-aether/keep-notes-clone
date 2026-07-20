from uuid import UUID

from sqlalchemy import create_engine, select, or_
from sqlalchemy.orm import Session

from database_schemas import Note, Base
from schemas import CreateNote

engine = create_engine("sqlite:///notes-app.db", echo=True)
# create the tables
Base.metadata.create_all(engine)

def add_note(note: CreateNote):
    with Session(engine) as session:
        note = Note(
            title= note.title,
            body= note.body
        )

        session.add(note)

        session.commit()

def get_notes(search_str="") -> list[Note]:
    if not search_str:
        stmt = select(Note)
    else:
        stmt = select(Note).where(or_(
            Note.body.contains(search_str),
            Note.title.contains(search_str)
        ))

    with Session(engine) as session:
        return session.scalars(stmt).all()

def get_note(id: UUID) -> Note:
    with Session(engine) as session:
        note = session.get(Note, id)
        return note


def update_note(
        id: UUID, 
        new_body: str | None = None, 
        new_title: str | None = None
) -> None:

    with Session(engine) as session:
        note = session.get(Note, id)

        if note is None:
            return None

        if new_body is not None:
            note.body = new_body

        if new_title is not None:
            note.title = new_title

        session.commit()
        return True

def delete_note(id: UUID):
    with Session(engine) as session:
        note = session.get(Note, id)

        if note is None:
            return None

        session.delete(note)

        session.commit()

        return True