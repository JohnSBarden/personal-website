import React from "react";
import { CodePen } from "../Components/Playgrounds/CodePen";
import Resume from "../Components/Resume/Resume";
import { defaultJS } from "../Components/Resume/Content";

function Professional() {
  return (
    <div id="main-body">
      <p className="blurb">
        This website is the best example of my web dev experience.
      Take a look at its <a href="https://github.com/JohnSBarden/personal-website" target="_blank" rel="noopener noreferrer">repo</a>, if you want to see what I've been doing with it lately.
    </p>
      <div className="professional-intrigue">
        <Resume />
        <CodePen babelContent={defaultJS} />
      </div>
    </div>
  );
}

export default Professional;
