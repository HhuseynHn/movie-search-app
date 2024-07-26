/** @format */

import React from "react";
import NavList from "../../navigation/nav-list";
import Logo from "../../reuseable/logo/logo";
import styles from "./header-style.module.css";
import logo from "../../../images/logo.jpg";
import Title from "../../reuseable/title/title";

const Header = ({ click }) => {
  return (
    <>
      <header>
        <div className={styles["opacity-div"]}></div>
        <div className={styles.headerContainer}>
          <div className={styles["header-style"]}>
            <Logo imgSrc={logo} clasName={styles.logo} imgTitle={"logo"} />

            <Title clasName={styles["header-title"]}>MOVIE SEARCH</Title>

            <NavList clickWatchlist={click} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
