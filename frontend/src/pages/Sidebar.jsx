import React from 'react';
import './Sidebar.css';
import { FaHome, FaUser, FaGamepad, FaForumbee, FaCog } from 'react-icons/fa';
<<<<<<< HEAD
import pp from '../assets/aayush.jpg'
=======
import TrendingGames from './TrendingGames';
import pp from '../assets/aayush.jpg';
import LogoutBtn from "../components/LogoutBtn";
import { useSelector } from 'react-redux';
>>>>>>> 2bf6a1f3857c285094d7cbe5f451eca8f14cf78f

const Sidebar = () => {
  const authStatus = useSelector((state) => state.auth.status);

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
          {authStatus ? (
            <li>
              <div className="icon">
                <LogoutBtn />
              </div>
            </li>
          ) : (
            <li>
              <a href="/login">
                <FaCog className="icon" />
                <span>Login</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div className="sidebar-footer">
<<<<<<< HEAD
=======
        <TrendingGames />
>>>>>>> 2bf6a1f3857c285094d7cbe5f451eca8f14cf78f
      </div>
    </div>
  );
};

export default Sidebar;
