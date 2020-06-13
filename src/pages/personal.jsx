import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";
import { Col, Row } from "react-bootstrap";
import { Blog } from "../Components/Blog/Blog";
import { Layout } from "../components/layout/Layout";

function Personal() {
  return (
    <Layout id="personal">
      <Row id="main-body">
        <Col>
          <MyCarousel />
        </Col>
        <Col>
          <Blog />
        </Col>
      </Row>
    </Layout>
  );
}

export default Personal;
