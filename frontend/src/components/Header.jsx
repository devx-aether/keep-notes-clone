import "../css/Header.css";

function Header() {
  return (
    <header className="app-header">

      <div className="left">
        <button className="sidebar-button material-symbols-outlined">
          Menu
        </button>
        <h1 className="app-name">Notes App</h1>
      </div>

      <div className="center">
        <input className="search-bar" placeholder="Search..."/>
      </div>

      <div className="right">
        <button className="account-icon" />
      </div>

    </header>
  );
}

export default Header;
