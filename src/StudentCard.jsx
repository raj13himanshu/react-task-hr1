import React from 'react'
import { Card } from "./Card";

import img1 from "./images/medal1.jpg";
import img2 from "./images/head1.png";
import img3 from "./images/head2.png";
import img4 from "./images/head3.png";
import img5 from "./images/book.jpg";




const StudentCard = () => {
  return (
    <Card>
      <div className="row font-weight-bolder text-black  max-h-19 flow-ys ">
        <div className="pencil-b ">
          <p className="font-weight-bold my-2 f-13">
            <img className="icon4" src={img1} /> &#160; TOP PERFORMER
          </p>
          <p className="f-12">
            <img className="icon3" src={img2} /> Courtsey Henry &#160; &#160;
            &#160; &#160; &#160; &#160; &#160; 60/100 Marks
          </p>
          <p className="f-12">
            &#160;
            <img className="icon3" src={img3} /> &#160; Ralph Edwards &#160;
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; 70/100 Marks
          </p>
          <p className="f-12">
            &#160;
            <img className="icon3" src={img4} /> &#160; Bessie Cooper &#160;
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; 80/100 Marks
          </p>
        </div>

        <div className="pt-2">
          <p className="font-weight-bold my-1 f-11 mb-3">
            &#160;
            <img className="icon3" src={img5} /> &#160; STUDENTS THAT NEED
            ATTENTION
          </p>
          <p className="f-12">
            <img className="icon3" src={img2} /> Courtsey Henry &#160; &#160;
            &#160; &#160; &#160; &#160; &#160; 60/100 Marks
          </p>
          <p className="f-12">
            &#160;
            <img className="icon3" src={img3} /> &#160; Ralph Edwards &#160;
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; 70/100 Marks
          </p>
          <p className="f-12">
            &#160;
            <img className="icon3" src={img4} /> &#160; Bessie Cooper &#160;
            &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; 80/100 Marks
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;
