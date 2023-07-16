import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <>
      <div className={styles.contactContainer}>
        <h2>
          Unlock Your Brand's Potential. <br /> Connect with Us Today!
        </h2>
        <Link to="/contact">
          Contact Us <span>&#8594;</span>
        </Link>
      </div>
    </>
  );
}

export default ContactUs;
