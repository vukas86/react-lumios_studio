import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <motion.h1 initial={{ marginLeft: 450 }} animate={{ x: -240 }}>
          We Are
        </motion.h1>

        <motion.h1 initial={{ marginRight: 450 }} animate={{ x: 220 }}>
          Lumios
        </motion.h1>

        <motion.h1 initial={{ marginLeft: 450 }} animate={{ x: -240 }}>
          Studio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Dare to be Different, Choose our Design Studio
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.bnrBtn}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </>
  );
}

export default Banner;
