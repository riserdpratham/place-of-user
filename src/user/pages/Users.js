import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "RD",
      image: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
