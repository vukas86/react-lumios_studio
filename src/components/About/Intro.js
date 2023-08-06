import { motion } from "framer-motion";
import data from "../../data/data.json";
import styles from "./Intro.module.css";

function Intro() {
  console.log(data.about);
  return (
    <>
      <motion.section
        initial={{ marginTop: 420 }}
        animate={{ y: -300 }}
        transition={{ duration: 1 }}
        className={styles.titleContainer}
      >
        <h1>Light up your world!</h1>
      </motion.section>
      <section className={styles.aboutContainer}>
        {data.about.map((text) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            className={styles.aboutCard}
            key={text.id}
          >
            <h3>{text.title}</h3>
            <p>{text.text}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
}

export default Intro;
