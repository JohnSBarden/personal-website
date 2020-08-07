import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";
import { CodePen } from "../Components/Playgrounds/CodePen";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";

export default function Index() {
  return (
    <div id="main-body">
      <p className="blurb">
        Welcome to my personal website! I wanted to write enough React to
        have a place to mess around with javascript. <br />I'll use my{" "}
        <a href="/personal" /*style={linkStyle}*/>
          Personal Tab
        </a>{" "}
        as a blog if you want to follow what I'm doing.
        </p>
      <MyCarousel />
    </div>
  );
}