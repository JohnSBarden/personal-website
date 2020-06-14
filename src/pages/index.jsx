import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";
import { CodePen } from "../Components/Playgrounds/CodePen";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";

export default function Index() {
  // const linkStyle = {
  //   textDecoration: "underline",
  //   color: styles.accent, 
  // };
  const colStyle = {
    height: "50%",
  };

  return (
    <Layout id="home">
      <Row id="main-body">
        <Col style={colStyle}>
          <MyCarousel />
        </Col>
        <Col>
          <CodePen />
        </Col>
      </Row>
      <Row id="blurb">
        <Col>
          <p>
            Welcome to my personal website! I wanted to write enough React to
            have a place to mess around with javascript. I'll use my{" "}
            <a href="/personal" /*style={linkStyle}*/>
              Personal Tab
            </a>{" "}
            as a blog-esque place (eventually...) if you want to follow what I'm
            doing.
          </p>
          <p></p>
        </Col>
      </Row>
    </Layout>
  );
}