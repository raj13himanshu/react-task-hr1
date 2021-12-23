import React from "react";
import Navbar from "../Navbar";
import Resources from "../Resource";
import Error404 from "../Error404";


const Resource = () => {
  return (
    <>
      <Navbar />

      <Resources />

      <Error404 />
    </>
  );
};

export default Resource;
