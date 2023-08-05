import { motion } from "framer-motion";
import styles from "./OurProjects.module.css";

import data from "../../data/data.json";

function OurProjects() {
  console.log(typeof data.projects[0].image);
  return (
    <>
      <div className={styles.projectContainer}>
        {data.projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className={styles.prjctImg}
            />
            <h3>{project.name}</h3>
            <p>{project.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default OurProjects;
