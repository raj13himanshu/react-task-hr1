import React from "react";
import cx from "classnames";
import "./card.css";

export const Card = (props) => {
  return <div className={cx("card")}>{props.children}</div>;
};
