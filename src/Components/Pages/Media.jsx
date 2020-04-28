import React from "react";
import { MyCarousel } from "../Carousel/Carousel";
import { Col, Row } from "react-bootstrap";

function Media() {
  return (
    <Row id="main-body">
      <Col>
        <MyCarousel />
      </Col>
    </Row>
  );
}

export default Media;
