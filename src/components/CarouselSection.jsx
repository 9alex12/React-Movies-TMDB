import React from "react";
import Carousel from "../components/Carousel";
import "../assets/styles/CarrouselSection.scss";

const CarouselSection = ({ myList, popular, comingSoon, setModal }) => {
  return (
    <div className="sections">
      <Carousel
        className="sectionIndividual"
        title="My list"
        data={myList}
        setModal={setModal}
      />
      <Carousel
        className="sectionIndividual"
        title="Popular"
        data={popular}
        setModal={setModal}
      />
      <Carousel
        className="sectionIndividual"
        title="Coming soon"
        data={comingSoon}
        setModal={setModal}
      />
    </div>
  );
};

export default CarouselSection;
