import { useEffect, useState } from "react";
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
  const [imgBlur, setImgBlur] = useState(true);

  useEffect(() => {
    const imgTargets = document.querySelectorAll("img[data-src]");
    const imgTargetsRef = Array.from(imgTargets);

    const loadImg = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;

          img.addEventListener("load", () => {
            setImgBlur(false);
          });
        }
      });
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
    });

    imgTargetsRef.forEach((img) => imgObserver.observe(img));

    // Cleanup the observer when the component is unmounted
    return () => imgObserver.disconnect();
  }, []);

  const blurClass = imgBlur ? "lazyImg" : "";

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
              className={`${styles.mbrImg} ${blurClass}`}
            ></img>
            <h3>Mei Choi</h3>
            <p>Co-founder / Design Director</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member2lazy}
              data-src={member2}
              alt="member2"
              className={`${styles.mbrImg} ${blurClass}`}
            ></img>
            <h3>Robert Jounior</h3>
            <p>Co-founder / Sr. UX Designers</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member3lazy}
              data-src={member3}
              alt="member3"
              className={`${styles.mbrImg} ${blurClass}`}
            ></img>
            <h3>Rosemery Winters</h3>
            <p>Motion Designer</p>
          </div>
          <div className={styles.memberCard}>
            <img
              src={member4lazy}
              data-src={member4}
              alt="member4"
              className={`${styles.mbrImg} ${blurClass}`}
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
// useEffect(() => {
//   const loadImg = function (entries, observer) {
//     const [entry] = entries;

//     if (!entry.isIntersecting) return;

//     entry.target.src = entry.target.dataset.src;

//     entry.target.addEventListener("load", () => {
//       setImgBlur(false);
//     });
//     observer.unobserve(entry.target);
//   };

//   const imgObserver = new IntersectionObserver(loadImg, {
//     root: null,
//     threshold: 0.1,
//   });

//   imgTargets.forEach((img) => imgObserver.observe(img));
// }, []);
