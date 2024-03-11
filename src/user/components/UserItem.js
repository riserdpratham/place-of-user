import React from "react";
import PropTypes from "prop-types";
import "./UsersList.css";

const UserItem = (props) => {
  return (
    <li class="users-item">
      <div class="user-content">
        <div class="user-item-image">
          <img src={props.id} alt={props.name} srcset="" />
        </div>
        <div class="user-item-info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount}
            {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

UserItem.propTypes = {};

export default UserItem;
