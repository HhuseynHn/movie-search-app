/** @format */

import React from "react";
// import movieData from "../../constant/movie-data";
import MovieCard from "./movie-card";
import styles from "./movie-style.module.css";

const MovieList = ({ movieDataFilter }) => {
  return (
    <>
      <div className={styles["movie-list-container"]}>
        <div className={styles["movie-list"]}>
          <ul>
            {movieDataFilter.map((movie) => (
              <li key={movie.id}>
                <MovieCard
                  movieName={movie.title}
                  title={movie.title}
                  imgSrc={movie.image}
                  movieDescrption={movie.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieList;
