import React from 'react';

const UserCard = ({ name, email, picture }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={picture} alt={name} />
      </div>
      <div className="user-info">
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserCard;