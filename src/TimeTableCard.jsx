import React from "react";
import { Card } from "./Card";
import "./TimeTableCard.css";

export const TimeTableCard = () => {
  return (
    <Card>
      <div className="time-table--container bg-b">
        {/* <Card> */}
        <div className="time-table--wrapper pencil-l">
          <span className="time-table--class-and-subject text-c f-16">
            Class 11A . Chemistry
          </span>
          <span className="time-table--class-time text-o f-15">
            In 30 mins . 6:30 - 7:15PM
          </span>
        </div>
        {/* </Card> */}
      </div>
    </Card>
  );
};

