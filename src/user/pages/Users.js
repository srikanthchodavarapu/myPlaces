import React from 'react';

import UsersList from '../components/UsersList';
// import mylogo from '../../imgs/Photo0414.jpg';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Srikanth',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
        places: 1
    },
    {
      id: 'u2',
      name: 'Srikanth',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
        places: 2
    },
    {
      id: 'u3',
      name: 'Srikanth',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
        places: 3
    },
    {
      id: 'u4',
      name: 'Srikanth',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png',
        places: 4
    }

  ];

  return <UsersList items={USERS} />;
};

export default Users;
