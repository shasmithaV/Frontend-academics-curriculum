import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Update styles as needed

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false); // State to toggle options visibility

  const toggleOptions = () => {
    setShowOptions(!showOptions); // Toggle the visibility of the elective options
  };

  return (
    <div className="sidebar">
      {/* Sidebar Header with Logo */}
      <div className="sidebar-header">
        <img src="path_to_logo" alt="Logo" className="logo" />
        <h2>LEARNING PORTAL</h2>
      </div>

      {/* Sidebar Menu */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="menu-item">
            
            DASHBOARD 
          </Link>
        </li>

        <li>
          <Link to="/curriculum" className="menu-item">
            
            CURRICULUM
          </Link>
        </li>

        <li>
          <Link to="/regulation" className="menu-item">
            
            STUDENTS GUIDELINES
          </Link>
        </li>

        <li>
          <Link to="/help-desk" className="menu-item">
            
            HELP DESK
          </Link>
        </li>

        {/* Conformation Status Section with Toggle for Submenu */}
        <li>
          <div className="menu-item" onClick={toggleOptions} style={{ cursor: 'pointer' }}>
            
            CONFORMATION STATUS
          </div>
          {showOptions && (
            <div className="submenu">
              <Link to="/professional-elective" className="submenu-item">
                PROFESSIONAL ELECTIVE
              </Link>
              <Link to="/open-elective" className="submenu-item">
                OPEN ELECTIVE
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/logout" className="menu-item">
            
            LOG OUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
