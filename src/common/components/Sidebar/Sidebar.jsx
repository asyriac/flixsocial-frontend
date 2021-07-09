import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="my-sidebar">
      <ul className="my-navbar-nav">
        <li className="my-nav-item">
          <Link to="/home" className="my-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path>
            </svg>
            <span className="my-nav-link-text">Home</span>
          </Link>
        </li>
        <li className="my-nav-item">
          <a href="/" className="my-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
            </svg>
            <span className="my-nav-link-text">Search</span>
          </a>
        </li>
        <li className="my-nav-item">
          <Link to="/profile" className="my-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path>
            </svg>
            <span className="my-nav-link-text">Profile</span>
          </Link>
        </li>
        <li className="my-nav-item">
          <Link to="/logout" className="my-nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path>
            </svg>
            <span className="my-nav-link-text">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
