import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
class GitHub extends React.Component {
  render() {
    return (
      <div className="socialPlug">
        <FontAwesomeIcon icon={faGithub} />
        <a
          href="https://github.com/johnsbarden"
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow me on GitHub!
        </a>
      </div>
    );
  }
}

export default GitHub;
