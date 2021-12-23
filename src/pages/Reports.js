import React from "react";
import Navbar from "../Navbar";
import Reports from "../Report";
import Error404 from "../Error404";

const Report = () => {
  return (
    <>
      <Navbar />

      <Reports />

      <Error404 />
    </>
  );
};

export default Report;
