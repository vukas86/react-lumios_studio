import React from "react";
import useTabTitle from "../hooks/useTabTitle";
import ContactForm from "../components/Contact/ContactForm";
import Office from "../components/Contact/Office";

function Contact() {
  useTabTitle("Contact Us / Lumios");
  return (
    <>
      <ContactForm />
      <Office />
    </>
  );
}

export default Contact;
