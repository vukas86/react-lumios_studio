import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";
import { motion } from "framer-motion";

import linkIcon from "../assets/icons/lnk.svg";
import githubIcon from "../assets/icons/github.svg";

const iconVarient = {
  hidden: { scale: 1 },
  visible: { scale: 1.25 },
};

function ContactUs() {
  return (
    <>
      <div className={styles.contactContainer}>
        <section>
          <h2>
            Unlock Your Brand's Potential. <br /> Connect with Us Today!
          </h2>
          <Link to="/contact">
            <motion.p whileHover={{ color: "#FFD700" }}>
              <motion.span whileHover={{ paddingRight: 10 }}>
                Contact Us
              </motion.span>
              <motion.span whileHover={{ paddingLeft: 12 }}>
                &#8594;
              </motion.span>
            </motion.p>
          </Link>
        </section>
        <section className={styles.addresses}>
          <p>
            create with passion by aleksandarvukasovic © 2023 all rights
            reserved
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/aleksandar-vukasovic"
              rel="noopener noreferrer"
              target="_blank"
            >
              <motion.img
                variants={iconVarient}
                initial="hidden"
                whileHover="visible"
                src={linkIcon}
                alt="linkendin logo"
              />
            </a>
            <a
              href="https://github.com/vukas86"
              rel="noopener noreferrer"
              target="_blank"
            >
              <motion.img
                variants={iconVarient}
                initial="hidden"
                whileHover="visible"
                src={githubIcon}
                alt="github logo"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
