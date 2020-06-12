import React from "react";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { SocialBadge } from "../Social/SocialBadge";

function Footer() {
  return (
    <div className="footer web-border">
      <SocialBadge
        url="https://linkedin.com/in/jbarden/"
        icon={faLinkedin}
        text="Connect with me on LinkedIn"
      />
      <SocialBadge
        url="https://twitter.com/JonnyBMackin/"
        icon={faTwitter}
        text="Follow me on Twitter"
      />
      <SocialBadge
        url="https://github.com/JohnSBarden/"
        icon={faGithub}
        text="Code with me on GitHub"
      />
      <SocialBadge
        url="https://codepen.io/JohnSBarden/"
        icon={faCodepen}
        text="Code with me on CodePen"
      />
    </div>
  );
}

export { Footer };
