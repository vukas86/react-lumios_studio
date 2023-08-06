import { motion } from "framer-motion";
import styles from "./OurProjects.module.css";

import data from "../../data/data.json";

const containerVarients = {
  hidden: { opacity: 0 },
  visible: { transition: { delay: 0.5 } },
  view: { opacity: 1 },
};

function OurProjects() {
  console.log(typeof data.projects[0].image);
  return (
    <>
      <div className={styles.projectContainer}>
        {data.projects.map((project) => (
          <motion.div
            variants={containerVarients}
            initial="hidden"
            visible="transition"
            whileInView="view"
            key={project.id}
            className={styles.projectCard}
          >
            <img
              src={project.image}
              alt={project.name}
              className={styles.prjctImg}
            />
            <motion.h3>{project.name}</motion.h3>
            <p>{project.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default OurProjects;
