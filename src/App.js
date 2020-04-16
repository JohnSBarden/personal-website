import React from "react";
import "./styles/App.scss";
import { MyCarousel } from "./Components/Carousel/MyCarousel";
// import { CodePen2 } from "./Components/Playgrounds/CodePen2";
import { CodePen } from "./Components/Playgrounds/CodePen";
import { SocialBadge, LinkedIn } from "./Components/Social/SocialBadge";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function App(props) {
  console.log("props in app ", props);
  // var location = ""; //"https://codepen.io/johnsbarden/pen/BaoyJOB";
  return (
    <div className="App">
      <MyCarousel />
      <CodePen />
      <div className="footer">
        <SocialBadge
          url="https://linkedin.com/in/jbarden/"
          icon={faLinkedin}
          text="Follow me on LinkedIn"
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
          url="https://codepen.io/johnsbarden/"
          icon={faCodepen}
          text="Code with me on CodePen"
        />
      </div>
      {/*<CodePen2 id="playground" script={props.text} location={location} />*/}
    </div>
  );
}

export default App;

// RANDOM PIC
// https://source.unsplash.com/collection/3508426/480x480
