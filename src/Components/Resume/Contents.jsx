import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { stripIndent } from "react-codepen-prefill-embed";

// Gonna move these into Markdown at some point.
// Right now they don't render when passing into a child component.

const schoolContent =
  "I attended the University of Missouri-Columbia, graduating in December 2015 with a double major in Electrical and Computer Engineering and minors in Math and Computer Science. I graduated with a 3.5 GPA.";

const workExContent =
  "In school, I interned with NASA's Jet Propulsion Labs, Major Tool & Machine, and Cerner.  At JPL I worked with Real Time Operating Systems to compare efficiency in simulating flight operations on test hardware.  At Major Tool in Indianapolis, I worked in the QA department to overhaul some aging software for the machining shop and improve efficiency in their inventory systems.<br>Now at Cerner since January 2016, I've worked on Java, SQL, C#, React, and a variety of other languages, and have spearheaded the development of our automated testing framework and our APIs.";

export function Content(props) {
  const [showContent, setShowContent] = useState(false);
  console.log(showContent, props);
  return (
    <div>
      <Button onClick={() => setShowContent(!showContent)}>
        {props.title}
      </Button>
      {showContent && <p>{props.contents}</p>}
    </div>
  );
}

// I wrote this first, then put it in a generic thing I can just pass the content into :)
// function School() {
//   const [showSchool, setShowSchool] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowSchool(!showSchool)}>School</Button>
//       {showSchool && (
//         <p>
//           I attended the University of Missouri-Columbia, graduating in December
//           2015 with a double major in Electrical and Computer Engineering and
//           minors in Math and Computer Science. I graduated with a 3.5 GPA.
//         </p>
//       )}
//     </div>
//   );
// }

export const defaultJS = stripIndent`

function App() {
  return (
    <div className="resume">
      <p> This is demoing the original "Content" component I wrote as "School" and how I genericized it.</p>
      <School />
      <Content title="Contentified School" contents={schoolContent} />
    </div>
  );
}

// I wrote this first, then put it in a generic thing I can just pass the content into :)
function School() {
  const [showSchool, setShowSchool] = React.useState(false);
  return (
    <div>
      <ReactBootstrap.Button onClick={() => setShowSchool(!showSchool)}>
        School
      </ReactBootstrap.Button>
      {showSchool && <p>{schoolContent}</p>}
    </div>
  );
}

function Content(props) {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div>
      <ReactBootstrap.Button onClick={() => setShowContent(!showContent)}>
        {props.title}
      </ReactBootstrap.Button>
      {showContent && <p>{props.contents}</p>}
    </div>
  );
}


const schoolContent =
  "I attended the University of Missouri-Columbia, graduating in December 2015 with a double major in Electrical and Computer Engineering and minors in Math and Computer Science. I graduated with a 3.5 GPA.";

ReactDOM.render(<App />, document.getElementById("root"));

`;
