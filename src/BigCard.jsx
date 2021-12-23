import React from "react";
import { Card } from "./Card";
import "./BigCard.css";

const dataImpPoints = [
  {
    title: "Last minute revision - Light & sound Post your comment",
    classSection: "Physics class 6B *",
    submitted: "2/6 submitted",
    color: "grey",
    pencil: "pencil-b",
  },
  {
    title: "Grade Assignments - Light & sound Post your comment",
    classSection: "Physics class 6B *",
    submitted: "2/6 submitted",
    color: "orange",
    pencil: "pencil-b",
  },
  {
    title: "Grade Test - Light & sound Post your comment",
    classSection: "Physics class 6B *",
    submitted: "2/6 submitted",
    color: "grey",
    pencil: "pencil-b",
  },
  {
    title: "Grade Quiz - Light & sound Post your comment",
    classSection: "Physics class 6B *",
    submitted: "2/6 submitted",
    color: "grey",
  },
];

export const BigCard = () => {
  return (
    <Card>
      {dataImpPoints.map((item) => (
        <div className={`big-card-container ${item.pencil}`}>
          <span className={`block ${item.color}`} />
          <div>
            <span className="imp-points">{item.title}</span>
            <div>
              <span className="text-font">{item.classSection}</span>
              <span className="text-font text-o">{item.submitted}</span>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};
