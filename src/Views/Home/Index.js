import React from "react";
import heroImg from "../../images/illustration-intro.svg";
import style from "./home.module.css";
import About from "../../component/About/Index";
import Testimonial from "../../component/Testimonial/Index";

function Index() {
  return (
    <>
      <div className={style.hero__container}>
        <div className={style.hero__text}>
          <h2> Bring everyone together to build better products.</h2>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className={style.hero__btn}>Get Started</button>
        </div>
        <div className={style.hero__img}>
          <img src={heroImg} alt="" />
        </div>
      </div>
      <About />
      <Testimonial />
    </>
  );
}

export default Index;
