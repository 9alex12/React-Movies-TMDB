import React, { useEffect, useState } from "react";
import "./styles.css";
import Nav from "./components/Nav";
import Principal from "./components/Principal";
import CategoriesContainer from "./components/CategoriesContainer";
import CarouselSection from "./components/CarouselSection";
import Modal from "./components/Modal";
import api from "./utils/api";

export default function App() {
  const [myList, setMyList] = useState([]);
  const [popular, setPopular] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [modal, setModal] = useState({ data: {}, isOpen: false });

  const getData = async (api, setter) => {
    const data = await api();
    setter(data);
  };

  //myList

  useEffect(() => {
    getData(api.myList, setMyList);
    getData(api.getPopularMovies, setPopular);
    getData(api.getComingSoon, setComingSoon);
  }, []);
  return (
    <div className="App">
      <Nav />
      <Principal movie={comingSoon[8]} />
      <CategoriesContainer />
      <CarouselSection
        myList={myList}
        popular={popular}
        comingSoon={comingSoon}
        setModal={setModal}
      />
      <Modal state={modal} setModal={setModal} />
    </div>
  );
}
