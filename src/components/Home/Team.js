import styles from "./Team.module.css";
import member1 from "../../assets/images/img1.jpg";
import member2 from "../../assets/images/img2.jpg";
import member3 from "../../assets/images/img3.jpg";
import member4 from "../../assets/images/img4.jpg";

function Team() {
  return (
    <>
      <div className={styles.teamContainer}>
        <h2>Meet Our Team</h2>
        <div className={styles.membersContainer}>
          <div className={styles.memberCard}>
            <img src={member1} alt="member1" className={styles.mbrImg}></img>
            <h3>Mei Choi</h3>
            <p>Co-founder / Design Director</p>
          </div>
          <div className={styles.memberCard}>
            <img src={member2} alt="member2" className={styles.mbrImg}></img>
            <h3>Robert Jounior</h3>
            <p>Co-founder / Sr. UX Designers</p>
          </div>
          <div className={styles.memberCard}>
            <img src={member3} alt="member3" className={styles.mbrImg}></img>
            <h3>Rosemery Winters</h3>
            <p>Motion Designer</p>
          </div>
          <div className={styles.memberCard}>
            <img src={member4} alt="member4" className={styles.mbrImg}></img>
            <h3>Chris Redfield</h3>
            <p>Motion Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
