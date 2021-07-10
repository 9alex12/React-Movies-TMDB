import React from "react";
import "../../assets/styles/Button.scss";

const Button = ({ className, label }) => (
  <button className={`button ${className}`} type="button">
    {label}
  </button>
);

export default Button;
