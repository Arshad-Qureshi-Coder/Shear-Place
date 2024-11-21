import React from 'react';
import './UsersList.css';
import UserItems from './UserItems';

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>NO USERS FOUND.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItems
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
