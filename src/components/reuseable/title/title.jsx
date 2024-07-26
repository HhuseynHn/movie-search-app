/** @format */

import React from "react";

const Title = ({ clasName, children }) => {
  return (
    <>
      <h2 className={clasName}>{children}</h2>
    </>
  );
};

export default Title;
