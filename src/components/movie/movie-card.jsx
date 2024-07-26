/** @format */

import React from "react";
import styles from "./movie-style.module.css";
const MovieCard = ({ imgSrc, title, movieName, movieDescrption }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <>
      <div className={styles["movie-item"]}>
        <div className={styles["img-container"]}>
          <img src={imgSrc} alt={title} />
        </div>
        <div className={styles["movie-name"]}>
          <h3>{truncateDescription(movieName, 20)}</h3>
        </div>
        <div className={styles["movie-descrptn"]}>
          <p>{truncateDescription(movieDescrption, 40)}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
