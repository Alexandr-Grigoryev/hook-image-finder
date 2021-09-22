// import { Component } from "react";
import { useState, useEffect } from "react";

// import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Modal from "./Components/Modal/Modal";
import Container from "./Components/Container/Container";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import s from "../src/Components/Loader/Loader.module.css";
import apiService from "./apiServiсe";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // state = {
  //   searchQuery: "",
  //   images: [],
  //   page: 1,
  //   loading: false,
  // };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      apiService(searchQuery, page)
        .then((images) =>
          setImages((prevState) => [...prevState, ...images.hits])
        )
        .finally(() => {
          setLoading(false);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });

      // fetch(
      //   `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
      // )
      //   .then((response) => response.json())

      //   .then((images) =>
      //     setImages((prevState) => [...prevState, ...images.hits])
      //   )
      //   .finally(() => setLoading(false));
    }, 1000);
  }, [page, searchQuery]);

  // componentDidUpdate(prevProps, prevState) {
  //   const prevSearchQuery = prevState.searchQuery;
  //   const nextSearchQuery = searchQuery;

  //   if (prevSearchQuery !== nextSearchQuery) {
  //     setLoading(true);

  //     setTimeout(() => {
  //       fetch(
  //         `https://pixabay.com/api/?q=${nextSearchQuery}&page=${page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
  //       )
  //         .then((response) => response.json())

  //         .then((images) => setImages(images.hits))
  //         .finally(() => setLoading( false ));
  //     }, 1000);
  //   } else if (prevState.page !== page) {
  //     setImages([]);
  //     setLoading(true);
  //     fetch(
  //       `https://pixabay.com/api/?q=${nextSearchQuery}&page=${page}&key=22401387-939474c986f9f27fc379ab5f6&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then((response) => response.json())

  //       .then((images) =>
  //       // setImages([...prevState.images, ...images.hits] )
  //       setImages(prevState =>[...prevState.images, ...images.hits] )
  //       )
  //       .finally(() => setLoading(false));
  //   }

  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const toggleModal = () => {
    setSelectedImg(!selectedImg);
  };

  const selectImg = (largeImg) => {
    setSelectedImg(largeImg);
  };

  const handleFormSubmit = (searchQuery) => {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && (
        <div className={s.loader}>
          <Loader
            type="Grid"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000} //3 secs
          />
        </div>
      )}
      <ImageGallery imgArr={images} selectImg={selectImg}></ImageGallery>
      {images.length !== 0 && <Button onLoadMore={loadMore} />}

      {selectedImg && <Modal img={selectedImg} onClose={toggleModal} />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Same as */}
    </Container>
  );
}
