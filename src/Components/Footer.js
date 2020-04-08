import React from "react";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <GitHub />
        <LinkedIn />
      </div>
    );
  }
}

export default Footer;
