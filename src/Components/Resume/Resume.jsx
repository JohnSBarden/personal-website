import React from "react";
import * as Contents from "./Contents";

const schoolContent =
  "I attended the University of Missouri-Columbia, graduating in December 2015 with a double major in Electrical and Computer Engineering and minors in Math and Computer Science. I graduated with a 3.5 GPA.";

const workExContent =
  "In school, I interned with NASA's Jet Propulsion Labs, Major Tool & Machine, and Cerner.  At JPL I worked with Real Time Operating Systems to compare efficiency in simulating flight operations on test hardware.  At Major Tool in Indianapolis, I worked in the QA department to overhaul some aging software for the machining shop and improve efficiency in their inventory systems.<br>Now at Cerner since January 2016, I've worked on Java, SQL, C#, React, and a variety of other languages, and have spearheaded the development of our automated testing framework and our APIs.";

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
  "GitHub",
].join("\n");

export default function Professional() {
  return (
    <div className="resume">
      <Contents.Content title="School" contents={schoolContent} />
      <Contents.Content title="Work Experience" contents={workExContent} />
      <Contents.Content title="Technologies" contents={techList} />
    </div>
  );
}
