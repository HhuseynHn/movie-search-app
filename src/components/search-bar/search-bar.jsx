/** @format */

import React from "react";
import styles from "./search-bar.module.css";

const SearchBar = ({
  iconClas,
  placeHolder,
  type,
  inputClass,
  onclickBtn,
  movieTitleRef,
}) => {
  return (
    <>
      <div className={styles["search-bar-container"]}>
        <div className={styles["search-bar"]}>
          <input
            type={type}
            placeholder={placeHolder}
            className={inputClass}
            ref={movieTitleRef}
          />
        </div>

        <div className={styles["btn-search"]} onClick={onclickBtn}>
          {/* <i></i> */}
          <button className={iconClas}></button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
