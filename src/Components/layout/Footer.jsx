import React from "react";
import {
  faLinkedin,
  faGithub,
  faGitlab,
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
        className="header-link link"
      />
      <SocialBadge
        url="https://twitter.com/JonnyBMackin/"
        icon={faTwitter}
        text="Follow me on Twitter"
        className="header-link link"
      />
      <SocialBadge
        url="https://github.com/JohnSBarden/"
        icon={faGithub}
        text="Code with me on GitHub"
        className="header-link link"
      />
      <SocialBadge
        url="https://gitlab.com/JohnSBarden/"
        icon={faGitlab}
        text="Code with me on Gitlab"
        className="header-link link"
      />
      <SocialBadge
        url="https://codepen.io/JohnSBarden/"
        icon={faCodepen}
        text="Code with me on CodePen"
        className="header-link link"
      />
    </div>
  );
}

export { Footer };
