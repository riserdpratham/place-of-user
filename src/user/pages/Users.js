import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS =[
    {id:1,name:'RD',image:'',place:''},
    {id:2,name:'RD',image:'',place:''}
  ];
  return (
    <UsersList items={USERS}/>
  );
};

export default Users;
