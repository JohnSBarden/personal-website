import React from "react";
import { CodePen } from "../Playgrounds/CodePen";
import Resume from "../Resume/Resume";
import { Col, Row } from "react-bootstrap";
import { defaultJS } from "../Resume/Contents";

function Professional() {
  return (
    <Row id="main-body">
      <Col>
        <Resume />
      </Col>
      <Col>
        <CodePen babelContent={defaultJS} />
      </Col>
    </Row>
  );
}

export default Professional;
