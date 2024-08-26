import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaGamepad, FaForumbee, FaCog } from 'react-icons/fa';
import TrendingGames from './TrendingGames'; // Import the new component
import pp from '../assets/aayush.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={pp} alt="Profile" className="profile-pic" />
        <h2 className="username">Username</h2>
        <p className="status">Online</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="/">
              <FaHome className="icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaUser className="icon" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/games">
              <FaGamepad className="icon" />
              <span>Games</span>
            </a>
          </li>
          <li>
            <a href="/forum">
              <FaForumbee className="icon" />
              <span>Forum</span>
            </a>
          </li>
          <li>
            <a href="/login">
              <FaCog className="icon" />
              <span>Login</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <TrendingGames /> {/* Add the TrendingGames component */}
      </div>
    </div>
  );
};

export default Sidebar;
