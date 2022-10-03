import React from "react";
import Person from "./person";
import img1 from "../../images/avatar-richard.png";
import img2 from "../../images/avatar-anisha.png";
import img3 from "../../images/avatar-shanai.png";
import img4 from "../../images/avatar-ali.png";
import style from "./index.module.css";

function Testimonial() {
  return (
    <div className={style.testimonial__container}>
      <h3 className={style.testimonial__header}>What they've said</h3>
      <div className={style.testimonials}>
        <Person
          src={img2}
          name="Anisha Li"
          message="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        />
        <Person
          src={img4}
          name="Ali Bravo"
          message="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        />
        <Person
          src={img1}
          name="Richard Watts"
          message="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
        />
        {/* <Person
          src={img3}
          name="Shanai Gough "
          message="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
        /> */}
      </div>
      <div className={style.btn__container}>
        <button className={style.testimonial__btn}>Get Started</button>
      </div>
    </div>
  );
}

export default Testimonial;
