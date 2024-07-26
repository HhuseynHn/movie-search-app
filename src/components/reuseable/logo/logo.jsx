/** @format */

import React from "react";
import styles from "./logo-style.module.css";
const Logo = ({ imgSrc, imgTitle, clasName }) => {
  return (
    <>
      <h3>
        <img className={clasName} src={imgSrc} alt={imgTitle} />
      </h3>
    </>
  );
};

export default Logo;
