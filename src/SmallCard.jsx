import React from "react";
import { Card } from "./Card";
import "./SmallCard.css";

const data = [
  {
    title: "Overall Attendance",
    value: "80%",
    color: "text-g",
  },
  {
    title: "Avg. Test score",
    value: "40%",
    color: "text-o",
  },
  {
    title: "Assignment to check",
    value: "3",
    color: "text-o",
  },
  {
    title: "Course progress",
    value: "39%",
    color: "text-o",
  },
];

export const SmallCard = () =>
  data.map((item) => {
    return (
      <div className="small-card--container">
        <Card>
          <div className="small-card--item">
            <span className="small-card--title">{item.title}</span>
            <span className={`small-card--value ${item.color}`}>
              {item.value}
            </span>
          </div>
        </Card>
      </div>
    );
  });

  export default SmallCard;