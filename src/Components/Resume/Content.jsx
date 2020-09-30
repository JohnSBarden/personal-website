import React from "react";
import { Button } from "react-bootstrap";
import { stripIndent } from "react-codepen-prefill-embed";
import "./Resume.scss";

export function Content(props) {

  function handleClick() {
    props.callback(props.title);
  }

  const display = props.active === props.title;

  return (
    <div className="content">
      <Button onClick={handleClick} className="experience-button">
        {props.title}
      </Button>
      {display && <p className="content-text">{props.contents}</p>}
    </div>
  );
}

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
