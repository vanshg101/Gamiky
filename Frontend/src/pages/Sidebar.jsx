import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaGamepad, FaForumbee, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="/assets/profile-pic.jpg" alt="Profile" className="profile-pic" />
        <h2 className="username">Username</h2>
        <p className="status">Online</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">
              <FaHome className="icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#profile">
              <FaUser className="icon" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#games">
              <FaGamepad className="icon" />
              <span>Games</span>
            </a>
          </li>
          <li>
            <a href="#forum">
              <FaForumbee className="icon" />
              <span>Forum</span>
            </a>
          </li>
          <li>
            <a href="#settings">
              <FaCog className="icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
