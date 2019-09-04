import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Carousel/Carousel.scss";
import { Carousel } from "./Carousel/Carousel";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

// RANDOM PIC
// https://source.unsplash.com/collection/3508426/480x480
