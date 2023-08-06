import { motion } from "framer-motion";

import styles from "./Capabilities.module.css";

function Capabilities() {
  return (
    <>
      <motion.section
        // initial={{
        //   y: 300,
        // }}
        // whileInView={{ y: -300 }}
        // transition={{ delay: 1 }}
        className={styles.capaContainer}
      >
        <motion.div
          initial={{ y: 300 }}
          whileInView={{ y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="smallTitle">Capabilities</h3>
          <h2 className={styles.captTitle}>What are we good at</h2>
          <div className={styles.capLists}>
            <div className={styles.capList}>
              <h3>User Experience</h3>
              <ul>
                <li>UX Strategy</li>
                <li>UX Audits</li>
                <li>Info Architecture</li>
              </ul>
            </div>
            <div className={styles.capList}>
              <h3>Digital Design</h3>
              <ul>
                <li>Web Design</li>
                <li>Product Design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>
            <div className={styles.capList}>
              <h3>Branding</h3>
              <ul>
                <li>Brand Strategy</li>
                <li>Logo Design</li>
                <li>Copywriting</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Capabilities;
