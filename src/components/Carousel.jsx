import React from "react";
import "../assets/styles/Carousel.scss";
import Modal from "./Modal";

const URL_IMG = "https://image.tmdb.org/t/p/w200";

const Carousel = ({ title, className, data, setModal }) => (
  <div className={className}>
    <h1>{title}</h1>
    <div className="carouselItemContainer">
      {data?.map((movie) => (
        <div
          className="carouselItem"
          onClick={() => setModal({ isOpen: true, data: movie })}
        >
          <img src={`${URL_IMG}${movie.poster_path}`} alt="" />
          <div className="itemInfo">
            <h2>{movie.title}</h2>
            <h3>Duracion</h3>
            <div className="barra">
              <div className="barraWhite"></div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  </div>
);

export default Carousel;
