import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Banner.module.css";

const containerVarientsLeft = {
  hidden: { opacity: 0, marginLeft: 450 },
  visible: { opacity: 1, x: -240 },
};
const containerVarientsRight = {
  hidden: { opacity: 0, marginRight: 450 },
  visible: { opacity: 1, x: 220 },
};
const titleVarients = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.3 } },
};

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <motion.h1
          variants={containerVarientsLeft}
          initial="hidden"
          animate="visible"
        >
          We Are
        </motion.h1>

        <motion.h1
          variants={containerVarientsRight}
          initial="hidden"
          animate="visible"
        >
          Lumios
        </motion.h1>

        <motion.h1
          variants={containerVarientsLeft}
          initial="hidden"
          animate="visible"
        >
          Studio
        </motion.h1>
        <motion.p variants={titleVarients} initial="hidden" animate="visible">
          Dare to be Different, Choose our Design Studio
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.bnrBtn}
            whileHover={{ scale: 1.1 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </>
  );
}

export default Banner;
