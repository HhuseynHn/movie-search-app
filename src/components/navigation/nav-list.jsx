/** @format */

import React, { useState } from "react";
import navData from "../../constant/nav-data";
import NavItem from "./nav-item";

const NavList = ({ clickWatchlist }) => {
  const [fetchData, setFetchData] = useState([]);
  function getFetch() {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((result) => setFetchData(result))
    );
  }

  return (
    <>
      <nav>
        <ul>
          {navData.map((nav) => (
            <li key={nav.id}>
              <NavItem
                navTitle={nav.title}
                onClicknav={
                  nav.title == "Change data" ? clickWatchlist : undefined
                }
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
