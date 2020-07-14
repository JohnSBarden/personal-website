import React from "react";
import { CodePen } from "../Components/Playgrounds/CodePen";
import Resume from "../Components/Resume/Resume";
import { Col, Row } from "react-bootstrap";
import { defaultJS } from "../Components/Resume/Content";
import Layout from "../components/layout/Layout";

function Professional() {
  return (
    <Layout id="professional">
      <p className="blurb">
        This website is the best example of my web dev experience.
        Take a look at its <a href="https://github.com/JohnSBarden/personal-website" target="_blank" rel="noopener noreferrer">repo</a>, if you want to see what I've been doing with it lately.
        <Resume />
      </p>
      <CodePen babelContent={defaultJS} />
    </Layout >
  );
}

export default Professional;
