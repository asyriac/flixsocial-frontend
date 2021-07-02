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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon">
              <path d="M13.666 11.782L13 11.186V6a4 4 0 1 0-8 0v5.186l-.666.596A6.987 6.987 0 0 0 2.29 15h13.42a6.987 6.987 0 0 0-2.044-3.218zM12 17a3 3 0 0 1-6 0H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17h-6zm-3 1a1 1 0 0 0 1-1H8a1 1 0 0 0 1 1z"></path>
            </svg>
            <span className="my-nav-link-text">Notification</span>
          </a>
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
