// import { Component } from "react";
import { useState } from "react";

import s from "./Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  // state = {
  //   searchQuery: "",
  // };

  const handleNameChange = (event) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === "") {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // alert("");
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
