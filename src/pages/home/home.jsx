/** @format */

import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/layout/header/header";
import MovieList from "../../components/movie/movie-list";
import SearchBar from "../../components/search-bar/search-bar";
import movieData from "../../constant/movie-data";

import styles from "./home-style.module.css";
const Home = () => {
  const movieNameRef = useRef();
  const [movies, setMovies] = useState(movieData);
  const [movieDataFilter, setMovieDataFilter] = useState(movies);
  function hundleMovieName() {
    const searchMovieName = movieNameRef.current.value;
    let filterData = movieDataFilter.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovieName.toLowerCase())
    );
    setMovieDataFilter(filterData);
  }

  const [fetchData, setFetchdata] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getFetch = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        const result = await response.json();
        setFetchdata(result);
        setDisplayData(result);
      } catch (error) {
        setError(error.toString());
      }
    };

    getFetch();
  }, []);
  let change = true;
  function handleClick() {
    if (change) {
      change = false;
      setMovieDataFilter(fetchData);
    } else {
      change = true;
      setMovieDataFilter(movies);
    }
  }

  return (
    <>
      <Header click={() => handleClick()} />
      <SearchBar
        iconClas={"fa-solid fa-magnifying-glass"}
        placeHolder={"Movie name"}
        inputClass={styles.searcInputClas}
        type={"text"}
        onclickBtn={() => hundleMovieName()}
        movieTitleRef={movieNameRef}
      />
      <MovieList movieDataFilter={movieDataFilter} />
    </>
  );
};

export default Home;
