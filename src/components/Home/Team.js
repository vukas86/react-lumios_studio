import { useEffect, useRef, useState } from "react";
import styles from "./Team.module.css";
import member1 from "../../assets/images/team/img1.jpg";
import member1lazy from "../../assets/images/team/img1-compressed.jpg";
import member2 from "../../assets/images/team/img2.jpg";
import member2lazy from "../../assets/images/team/img2-compressed.jpg";
import member3 from "../../assets/images/team/img3.jpg";
import member3lazy from "../../assets/images/team/img3-compressed.jpg";
import member4 from "../../assets/images/team/img4.jpg";
import member4lazy from "../../assets/images/team/img4-compressed.jpg";

function Team() {
  // const myRef = useRef();
  // const [elementVisible, setElementVisible] = useState();
  const imgTargets = document.querySelectorAll("img[data-src]");
  console.log(imgTargets);
  // console.log(elementVisible);
  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setElementVisible(entry.isIntersecting);
    // });
    // observer.observe(myRef.current);
    const loadImg = function (entries, observer) {
      const [entry] = entries;
      console.log(entry);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0.1,
    });

    imgTargets.forEach((img) => imgObserver.observe(img));
  }, []);
  return (
    <>
      <div className={styles.teamContainer}>
        <h2 className="smallTitle">Meet Our Team</h2>
        <div className={styles.membersContainer}>
          <div className={styles.memberCard}>
            <img
              src={member1}
              data-src={member1lazy}
              alt="member1"
              className={`${styles.mbrImg} ${styles.lazyImg}`}
            ></img>
            <h3>Mei Choi</h3>
            <p>Co-founder / Design Director</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member2}
              data-src={member2lazy}
              alt="member2"
              className={`${styles.mbrImg} ${styles.lazyImg}`}
            ></img>
            <h3>Robert Jounior</h3>
            <p>Co-founder / Sr. UX Designers</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member3}
              data-src={member3lazy}
              alt="member3"
              className={`${styles.mbrImg} ${styles.lazyImg}`}
            ></img>
            <h3>Rosemery Winters</h3>
            <p>Motion Designer</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member4}
              data-src={member4lazy}
              alt="member4"
              className={`${styles.mbrImg} ${styles.lazyImg}`}
            ></img>
            <h3>Chris Redfield</h3>
            <p>Motion Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
