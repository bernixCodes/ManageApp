import React from "react";
import Point from "../Point/Index";
import style from "./index.module.css";

function About() {
  return (
    <div className={style.about__container}>
      <div className={style.about__left}>
        <h3 className={style.about__left_h3}>What's different about Manage?</h3>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className={style.about__right}>
        <div>
          <Point
            butNumber="01"
            title="Track company-wide progress"
            message="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. "
          />

          <Point
            butNumber="02"
            title="Advanced built-in reports"
            message="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />

          <Point
            butNumber="03"
            title=" Everything you need in one place"
            message="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
