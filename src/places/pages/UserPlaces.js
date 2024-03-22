import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "1",
    imageUrl:
      "https://www.livemint.com/lm-img/img/2024/01/24/600x338/Ayodhya_Ram_Mandir_1706104723218_1706118544459.jpg",
    title: "Ram Mandir",
    address: "Shree Ram Janmabhoomi Mandir, Sai Nagar, Ayodhya, Uttar Pradesh 224123",
    creatorId: "user123",
    location: {
      lat: 26.7956642,
      lng: 82.1120295,
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
      lat: 47.6062,
      lng: -122.3321,
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
      lat: 34.0522,
      lng: -118.2437,
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
