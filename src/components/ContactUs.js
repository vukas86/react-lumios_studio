import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";
import linkIcon from "../assets/icons/lnk.svg";
import githubIcon from "../assets/icons/github.svg";

function ContactUs() {
  return (
    <>
      <div className={styles.contactContainer}>
        <section>
          <h2>
            Unlock Your Brand's Potential. <br /> Connect with Us Today!
          </h2>
          <Link to="/contact">
            Contact Us <span>&#8594;</span>
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
              <img src={linkIcon} alt="linkendin logo" />
            </a>
            <a
              href="https://github.com/vukas86"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={githubIcon} alt="github logo" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
