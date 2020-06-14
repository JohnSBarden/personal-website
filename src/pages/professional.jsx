import React from "react";
import { CodePen } from "../Components/Playgrounds/CodePen";
import Resume from "../Components/Resume/Resume";
import { Col, Row } from "react-bootstrap";
import { defaultJS } from "../Components/Resume/Content";
import Layout from "../components/layout/Layout";
import "./styles/Pages.scss";

function Professional() {
  return (
    <Layout id="professional">
      <Row id="intro" style={{ fontSize: "1rem" }}>
        <p>This website is the best example of my web dev experience.  Take a look at its <a href="https://github.com/JohnSBarden/personal-website" target="_blank"
          rel="noopener noreferrer">repository on Github</a>, if you want to see what I've been doing with it lately.</p>
      </Row>
      <Row id="main-body">
        <Col xs={12} md={4} className="main-column">
          <Resume />
        </Col>
        <Col xs={12} md={8} className="main-column">
          <CodePen babelContent={defaultJS} />
        </Col>
      </Row>
    </Layout >
  );
}

export default Professional;
