import styles from "./OurProjects.module.css";

import data from "../../data/data.json";

function OurProjects() {
  console.log(typeof data.projects[0].image);
  return (
    <>
      <div className={styles.projectContainer}>
        {data.projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.prjctImg}
            />
            <h3>{project.name}</h3>
            <p>{project.text}</p>
          </div>
        ))}

        {/* <div className={styles.projectCard}>
          <img
            src={data.projects[1].image}
            alt="random"
            className={styles.prjctImg}
          />
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
        </div> */}
      </div>
    </>
  );
}

export default OurProjects;
