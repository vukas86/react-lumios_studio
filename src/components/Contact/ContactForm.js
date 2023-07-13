import { useRef, useState } from "react";

import styles from "./ContactForm.module.css";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [msgSubmitted, setMessageSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      companyName,
      message,
    };

    setFullName("");
    setEmail("");
    setCompanyName("");
    setMessage("");

    setMessageSubmitted(true);

    setTimeout(() => {
      setMessageSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3>Lumios</h3>
        <h2 className={styles.contactTitle}>Say Hello</h2>
        <div>
          <form
            className={styles.form}
            id="contact-form"
            onSubmit={submitHandler}
          >
            <div className={styles.input}>
              <label htmlFor="fullName">Your Full Name</label>
              <input
                type="text"
                name="fullName"
                tabIndex={1}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullName}
                required
              />
            </div>

            <div className={styles.input}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                tabIndex={2}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                tabIndex={3}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                value={companyName}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="message" className={styles.msgLabel}>
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                cols="40"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <div className={styles.formBtn}>
              <button type="submit" form="contact-form">
                Send Message
              </button>
            </div>
          </form>
          {msgSubmitted ? <p>Message is submitted 🙂</p> : null}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
