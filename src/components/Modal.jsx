import React, { useEffect, useState, useRef } from "react";
import "../assets/styles/Modal.scss";
import Button from "./sharedComponents/Button";
import api from "../utils/api";

const Modal = ({ state: { data, isOpen }, setModal }) => {
  const URL_IMG = "https://image.tmdb.org/t/p/w200";
  const [videoUrl, setVideoUrl] = useState("");

  const wrapperRef = useRef(null);

  const getUrlVideo = async (id) => {
    const videoData = await api.getVideo(id)();
    setVideoUrl(videoData && videoData[0].key);
  };

  useEffect(() => {
    getUrlVideo(data.id);
  }, [data]);

  return (
    <div ref={wrapperRef} className={`modal ${isOpen ? "open" : "close"}`}>
      <div className="wrapperModal">
        <div className="modalLeft">
          <div className="modalImage">
            <img src={`${URL_IMG}${data?.poster_path}`} alt="" />
          </div>
          <div className="modalInfo">
            <h1>{data?.title}</h1>
            <h5>{data.overview}</h5>
            <div className="modalButtons">
              <Button className="primary" label="PLAY NOW" />
              <Button className="secundary" label="WATCH LIST" />
            </div>
          </div>
        </div>
        <div className="modalVideo">
          <iframe
            height="250px"
            width="440px"
            src={`https://www.youtube.com/embed/${videoUrl}?controls=0&showinfo=0&rel=0&autoplay=${
              isOpen ? "1" : "0"
            }&loop=1&playlist=${videoUrl}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
