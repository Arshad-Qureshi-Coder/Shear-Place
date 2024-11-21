import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const userData = [
    {
      id: 'u1',
      name: 'Bob',
      image: '/assets/nature.webp',
      places: 3,
    },
    {
      id: 'u2',
      name: 'John',
      image: '/assets/rever.webp',
      places: 2,
    },
    {
      id: 'u3',
      name: 'Max',
      image: '/assets/sunset.jpg',
      places: 5,
    },
  ];

  return <UserList items={userData} />;
};

export default Users;

