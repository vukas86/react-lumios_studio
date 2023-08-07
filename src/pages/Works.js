import React from "react";
import useTabTitle from "../hooks/useTabTitle";
import AboutWork from "../components/Projects/AboutWork";
import OurProjects from "../components/Projects/OurProjects";

function Works() {
  useTabTitle("Our Projects / Lumios");
  return (
    <>
      <div className="projectsPage">
        <AboutWork />
        <OurProjects />
      </div>
    </>
  );
}

export default Works;
