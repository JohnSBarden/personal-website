import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";
import { Col, Row } from "react-bootstrap";
import { Blog } from "../Components/Blog/Blog";

function Personal() {
  return (
    <Row id="main-body">
      <Col>
        <MyCarousel />
      </Col>
      <Col>
        <Blog />
      </Col>
    </Row>
  );
}

export default Personal;
