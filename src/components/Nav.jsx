import React from "react";
import "../assets/styles/Nav.scss";
import userImage from "../assets/static/Iroh.jpeg";

const Nav = () => (
  <div className="navContainer">
    <div className="navContainerLeft">
      <ul>
        <li>HOME</li>
        <li>MOVIES</li>
        <li>SERIES</li>
        <li>KIDS</li>
      </ul>
    </div>
    <div className="navContainerRight">
      <h1>USERNAME</h1>
      <img src={userImage} alt="user_image" />
    </div>
  </div>
);

export default Nav;
