import React from "react";
import Navbar from "../Navbar";
import Assignments from "../Assignment";
import Error404 from "../Error404";

const Assignment = () => {
  return (
    <>
      <Navbar />

      <Assignments />

      <Error404 />
    </>
  );
};

export default Assignment;
