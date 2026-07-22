import "../css/NoteCard.css";

function NoteCard({ title, body }) {
  return (
    <div className="note-card">
      <div className="note-title">{ title }</div>
      <p className="note-body">{ body }</p>
      <div className="note-footer"></div>
    </div>
  );
}

export default NoteCard;
