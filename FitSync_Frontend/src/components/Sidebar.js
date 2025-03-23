import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Menu, X, User } from "lucide-react"; // Importing icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu button to toggle sidebar */}
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <Menu onClick={toggleSidebar} />
        </Link>
        <Link to='#' className='menu-bars'>
          <User />
        </Link>
      </div>

      {/* Sidebar container with animation */}
      <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items"  onClick={toggleSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars'>
              <X size={24}  onClick={toggleSidebar} />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/home" className="text-black" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          {/* 
          // To implement later: 
          <li className="nav-text">
            <Link to="/settings" className="text-black" onClick={toggleSidebar}>
              Settings
            </Link>
          </li> */}
          <li className="nav-text">
            <Link to="/calendar" className="text-black" onClick={toggleSidebar}>
              Calendar View
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/monthly-report" className="text-black" onClick={toggleSidebar}>
              Monthly Report
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/questionnaire" className="text-black" onClick={toggleSidebar}>
              Questionnaire
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/" className="text-black" onClick={toggleSidebar}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
