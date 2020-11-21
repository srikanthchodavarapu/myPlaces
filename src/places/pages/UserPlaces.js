import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Central Business District',
    description: 'One of the most famous Central-Business-District!',
    imageUrl:
      'https://www.nationsonline.org/gallery/Thailand/Bangkok-Central-Business-District-at-Chao-Phraya-River.jpg',
    address: '20 Chao Phraya River, Bangkok, TY 10001',
    location: {
      lat: 13.736717,
      lng: 100.523186
    },
    creator: 'u1'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
