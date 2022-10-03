import React from "react";
import style from "./index.module.css";

function Point({ butNumber, title, message }) {
  return (
    <div className={style.point__container}>
      <button className={style.point__btn}>{butNumber}</button>
      <div className={style.point_data}>
        <h5>{title}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Point;
