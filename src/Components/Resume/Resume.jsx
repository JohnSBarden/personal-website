import React, { useState } from "react";
import { Content } from "./Content";

const schoolContent =
  "I attended the University of Missouri-Columbia, graduating in December 2015 with a double major in Electrical and Computer Engineering and minors in Math and Computer Science. I graduated with a 3.5 GPA.";

const workExContent =
  "In school, I interned with NASA's Jet Propulsion Labs, Major Tool & Machine, and Cerner.  At JPL I worked with Real Time Operating Systems to compare efficiency in simulating flight operations on test hardware.  At Major Tool in Indianapolis, I worked in the QA department to overhaul some aging software for the machining shop and improve efficiency in their inventory systems.\nNow at Cerner since graduating, I've worked on Java, SQL, MongoDB, C#, React, and a variety of other languages, and have spearheaded the development of our automated testing framework and our APIs.";

const techList = [
  "React/JS",
  "CSS/Sass",
  "Node",
  "C#",
  "MVC",
  "Java",
  "Junit",
  "Spring",
  "SQL (Oracle and MySQL)",
  "MongoDB",
  "OpenAPI",
  "GitHub"
].join(" \n");

export default function Professional() {
  function callback(title) {
    activeContent === title ? setActiveContent("") : setActiveContent(title);
  }

  const [activeContent, setActiveContent] = useState("");

  const schoolTitle = "School", workTitle = "Work Experience", techTitle = "Technologies";

  return (
    <div className="resume">
      <Content title={schoolTitle} contents={schoolContent} active={activeContent} callback={callback} />
      <Content title={workTitle} contents={workExContent} active={activeContent} callback={callback} />
      <Content title={techTitle} contents={techList} active={activeContent} callback={callback} />
    </div>
  );
}
