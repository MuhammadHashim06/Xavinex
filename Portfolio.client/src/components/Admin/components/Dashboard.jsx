import { NavLink, Outlet } from "react-router-dom";
import logo_text from "../../../assets/Xavinex logo with left alignment-05.png";
import Logo from "../../../assets/Xavinex logo (1)-03.png";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logo_text} alt="User Avatar" className="logo" />
          <h2 className="sidebar-title"></h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink
                to="stats"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : "hover-link"}`
                }
              >
                <i className="fas fa-graduation-cap"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="request"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : "hover-link"}`
                }
              >
                <i className="fas fa-chalkboard-user"></i> Request
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/" className="logout-link">
            <i className="fas fa-sign-out-alt"></i> Logout
          </NavLink>
        </div>
      </aside>

      <main className="main-content">
        <div className="header">
          <h1 className="header-title">Xavinex</h1>
          <img className="header-logo" src={Logo} alt="" />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
