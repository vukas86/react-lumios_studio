import React from "react";
import useTabTitle from "../hooks/useTabTitle";
import Intro from "../components/About/Intro";
import Capabilities from "../components/About/Capabilities";

function About() {
  useTabTitle("About Us / Lumios");
  return (
    <>
      <Intro />
      <Capabilities />
    </>
  );
}

export default About;
