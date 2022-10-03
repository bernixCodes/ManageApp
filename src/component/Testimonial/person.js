import React from "react";
import style from "./index.module.css";
function Person({ src, name, message }) {
  return (
    <div className={style.profile__container}>
      <img alt="" src={src} />
      <h5>{name}</h5>
      <p>{message}</p>
    </div>
  );
}

export default Person;
