import { NavLink } from "react-router-dom";

export function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <h2>Dashboard</h2>
        <ul>
          <li><NavLink to="/rquests">All request</NavLink></li>
          <li><NavLink to="#">Home</NavLink></li>
          <li><NavLink to="#">Home</NavLink></li>
          <li><NavLink to="#">Home</NavLink></li>

        </ul>
      </div>
    );
  }