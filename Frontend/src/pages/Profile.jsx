import React, { useState } from 'react';
import './Profile.css'; // Import your custom styles

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    displayName: 'John Doe',
    username: 'john_doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
    joinDate: 'Joined: January 2023',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image
    gamesPlayed: 42,
    forumsParticipated: 15,
    achievements: 12
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <header className="profile-header">
        <img src={userInfo.profilePic} alt="Profile" className="profile-pic" />
        {isEditing ? (
          <>
            <input
              type="text"
              name="displayName"
              value={userInfo.displayName}
              onChange={handleInputChange}
              className="profile-input"
            />
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="profile-input"
            />
          </>
        ) : (
          <>
            <h1>{userInfo.displayName}</h1>
            <p>@{userInfo.username}</p>
          </>
        )}
        <button onClick={handleEditToggle} className="edit-profile-btn">
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </header>

      {/* User Info Section */}
      <section className="profile-info">
        <h2>User Info</h2>
        <p>Email: {isEditing ? <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} /> : userInfo.email}</p>
        <p>Location: {isEditing ? <input type="text" name="location" value={userInfo.location} onChange={handleInputChange} /> : userInfo.location}</p>
        <p>{userInfo.joinDate}</p>
      </section>

      {/* Profile Stats Section */}
      <section className="profile-stats">
        <h2>Stats</h2>
        <div className="stats-grid">
          <div>
            <h3>Games Played</h3>
            <p>{userInfo.gamesPlayed}</p>
          </div>
          <div>
            <h3>Forums Participated</h3>
            <p>{userInfo.forumsParticipated}</p>
          </div>
          <div>
            <h3>Achievements</h3>
            <p>{userInfo.achievements}</p>
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="activity-feed">
        <h2>Recent Activity</h2>
        {/* You can use a loop to dynamically populate recent activity */}
        <div className="activity-card">
          <p>Played "Cyberpunk 2077" recently.</p>
          <p>Participated in "Best RPGs of 2024" forum.</p>
        </div>
      </section>

      {/* Friends List Section */}
      <section className="friends-list">
        <h2>Friends</h2>
        <div className="friends-grid">
          {/* Loop through the user's friends */}
          <div className="friend-card">
            <img src="https://via.placeholder.com/100" alt="Friend" />
            <p>@friend_name</p>
          </div>
          {/* More friends can be added */}
        </div>
      </section>

      {/* Settings Section */}
      <section className="settings">
        <h2>Settings</h2>
        <button className="settings-btn">Privacy Settings</button>
        <button className="settings-btn">Account Settings</button>
        <button className="settings-btn danger">Delete Account</button>
      </section>
    </div>
  );
};

export default Profile;
