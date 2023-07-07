import styles from "./OurProjects.module.css";
import img1 from "../../assets/images/projects/project1.jpg";

function OurProjects() {
  return (
    <>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
        <div className={styles.projectCard}>
          <img src={img1} alt="random" className={styles.prjctImg} />
          <h3>Some Title</h3>
          <p>
            We provided Can World with a stunning visual identity that perfectly
            reflects their company as a leading producer of cans.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurProjects;
