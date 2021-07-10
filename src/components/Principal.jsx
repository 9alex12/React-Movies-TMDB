import React from "react";
import "../assets/styles/Principal.scss";
import Button from "./sharedComponents/Button";

const URL_IMG = "https://image.tmdb.org/t/p/original/";

const Principal = ({ movie }) => (
  <div
    className="principal"
    style={{
      backgroundImage: `linear-gradient(0, black, transparent) , url(${URL_IMG}${movie?.backdrop_path})`
    }}
  >
    <div className="sectionPrincipal">
      <h1>{movie?.title}</h1>
      <div className="buttonsContainer">
        <Button className="primary" label="PLAY NOW" />
        <Button className="secundary" label="WATCH LIST" />
      </div>
    </div>
  </div>
);

export default Principal;
