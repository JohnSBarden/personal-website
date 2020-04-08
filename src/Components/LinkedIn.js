import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
class LinkedIn extends React.Component {
  render() {
    return (
      <div className="socialPlug">
        <FontAwesomeIcon icon={faLinkedin} />
        <a
          href="https://www.linkedin.com/in/jbarden"
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow me on LinkedIn
        </a>
      </div>
    );
  }
}

export default LinkedIn;
