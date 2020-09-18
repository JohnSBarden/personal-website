import React from "react";
import { MyCarousel } from "../Components/Carousel/Carousel";

export default function Index() {
  return (
    <div id="main-body">
      <p className="blurb">
        Welcome to my personal website! I wanted to write enough React to
        have a place to mess around with javascript. <br />I'll use my{" "}
        <a href="/personal">
          Personal Tab
        </a>{" "}
        as a blog if you want to follow what I'm doing.
        </p>
      <MyCarousel />
    </div>
  );
}