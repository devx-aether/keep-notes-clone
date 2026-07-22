import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="notes-button">
        <span className="material-symbols-outlined">Emoji_Objects</span>
      </button>
      <button className="label-1">
        <span className="material-symbols-outlined">Label</span>
      </button>
      <button className="label-2">
        <span className="material-symbols-outlined">Label</span>
      </button>
      <button className="label-3">
        <span className="material-symbols-outlined">Label</span>
      </button>
      <button className="bin">
        <span className="material-symbols-outlined">Delete</span>
      </button>
      <button className="archive">
        <span className="material-symbols-outlined">Archive</span>
      </button>
    </div>
  );
}

export default Sidebar;
