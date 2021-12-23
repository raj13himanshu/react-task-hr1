import React from "react";
import Navbar from "../Navbar";
import Error404 from "../Error404";
import Tests from "../Test";

const Test = () => {
  return (
    <>
      <Navbar />

      <Tests />

      <Error404 />
    </>
  );
};

export default Test;
