import styles from "./ContactUs.module.css";

function ContactUs() {
  return (
    <>
      <div className={styles.contactContainer}>
        <h2>
          Unlock Your Brand's Potential. <br /> Connect with Us Today!
        </h2>
        <a href="/">
          Contact Us <span>&#8594;</span>
        </a>
      </div>
    </>
  );
}

export default ContactUs;
