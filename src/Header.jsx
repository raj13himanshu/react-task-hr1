import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BigCard } from "./BigCard";
import {TimeTableCard} from "./TimeTableCard";
import StudentCard from "./StudentCard";
import {SmallCard} from "./SmallCard";

import "./style.css";
import './SmallCard.css';
import './TimeTableCard.css';


const Header = () => {
  return (
    <>
      <section>
        <Container fluid className="header-section bg-color4 " id="header">
          <Container className="header-content bg-color4 border-0 ">
            <div className="flex mt-4 py-2 ml--60">
              <SmallCard />
            </div>
           

            <Row className="">
              <Col className=" col-8  ml-5  ">
                <h6 className="font-weight-bold mb-2 my-3 ">
                  Pending at your desk
                </h6>
                <BigCard> </BigCard>
              </Col>

              <Col className="col-3  ml-1 ">
                <h6 className="font-weight-bold mb-2 my-3">
                  Time Table &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                  &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;
                  <span className="green ">View more</span>
                </h6>
                <TimeTableCard> </TimeTableCard>
                <br></br>

                <h6 className="font-weight-bold ">Student Overview</h6>
              <StudentCard></StudentCard>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Header;
