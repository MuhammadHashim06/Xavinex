export function Header({ toggleSidebar }) {
    return (
      <header>
        <button className="menu-btn" onClick={toggleSidebar}>&#9776;</button>
        <h1>Dashboard</h1>
      </header>
    );
  }