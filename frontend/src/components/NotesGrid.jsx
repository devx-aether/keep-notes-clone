import NoteCard from "./NoteCard";
import "../css/NotesGrid.css";


function NotesGrid( {notes} ) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
}

export default NotesGrid;
