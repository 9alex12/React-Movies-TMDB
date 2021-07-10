import React, { useState, useRef } from "react";
import "../assets/styles/Category.scss";

const Category = ({ title, quantity, urlVideo }) => {
  const [isPlay, setIsPlay] = useState(0);

  const videoRef = useRef(null);

  return (
    <div
      className="category"
      onMouseEnter={() => videoRef.current.play()}
      onMouseLeave={() => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }}
    >
      <video ref={videoRef} class="video" muted autoplay>
        <source src={urlVideo} type="video/mp4" />
      </video>
      <div className="categoryText">
        <h3>{title}</h3>
        <h5 className="textHover">{quantity}</h5>
      </div>
    </div>
  );
};

export default Category;
