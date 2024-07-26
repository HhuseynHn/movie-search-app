/** @format */

import React from "react";

const NavItem = ({ onClicknav, navTitle }) => {
  return (
    <>
      <h2 onClick={onClicknav}>{navTitle}</h2>
    </>
  );
};

export default NavItem;
