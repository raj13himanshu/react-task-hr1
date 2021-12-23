import React from 'react';


import Navbar from "../Navbar";
import Lessons from "../Lesson";
import Error404 from "../Error404";


const Lesson = () => {
    return (
      <>
        <Navbar />

        <Lessons />

       <Error404 />
       

      </>
    );
}

export default Lesson;
