import React from "react";
import logo from "../../images/logo.svg";
import style from "./header.module.css";

function Index() {
  return (
    <>
      <div className={style.header__main}>
        <div className={style.center__img}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={style.header__list}>
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Carrers</li>
          <li>Community</li>
        </ul>

        <button className={style.header__btn}>Get Started</button>
      </div>
    </>
  );
}

export default Index;
