import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function SocialBadge(props) {
  return (
    <a className="link">
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip(props)}
        style={{ backgroundColor: "white" }}
      >
        <FontAwesomeIcon
          className="social-badge"
          icon={props.icon} //faLinkedin
          onClick={() => window.open(props.url, "_blank")}
        />
      </OverlayTrigger>
    </a>
  );
}

function renderTooltip(props) {
  return (
    <Tooltip className="social-tooltip" {...props} style={{ color: "white" }}>
      {props.text}
    </Tooltip>
  );
}

export { SocialBadge };
