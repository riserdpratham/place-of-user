import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th?id=OIP.9DfB7IDaOMv-4BG_klL5LwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    title: "Beautiful Beach",
    address: "123 Beach Street, Beach City",
    creatorId: "user123",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th?id=OIP.9DfB7IDaOMv-4BG_klL5LwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    title: "Mountain View",
    address: "456 Mountain Road, Mountain Town",
    creatorId: "user456",
    location: {
      latitude: 47.6062,
      longitude: -122.3321,
    },
  },
  {
    id: "3",
    imageUrl:
      "https://th.bing.com/th?id=OIP.9DfB7IDaOMv-4BG_klL5LwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    title: "Cityscape",
    address: "789 City Street, Cityville",
    creatorId: "user789",
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.id === userId
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
