import React from "react";
import { CodePen } from "../Playgrounds/CodePen";
import Resume from "../Resume/Resume";
import { Col, Row } from "react-bootstrap";
import { defaultJS } from "../Resume/Content";
import "./Pages.scss";

function Professional() {
  return (
    <Row id="main-body">
      <Col xs={12} md={4} className="main-column">
        <Resume />
      </Col>
      <Col xs={12} md={8} className="main-column">
        <CodePen babelContent={defaultJS} />
      </Col>
    </Row>
  );
}

export default Professional;
