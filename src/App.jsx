import React from "react";
import "./styles/App.scss";
import { MyCarousel } from "./Components/Carousel/Carousel";
import { CodePen } from "./Components/Playgrounds/CodePen";
import { Footer } from "./Components/Footer";
import { Col, Row, Container } from "react-bootstrap";

function App(props) {
  console.log("props in app ", props);
  return (
    <Container fluid className="App">
      <Row id="main-body">
        <Col>
          <MyCarousel />
        </Col>
        <Col>
          <CodePen />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;

// RANDOM PIC
// https://source.unsplash.com/collection/3508426/480x480

// ADD in Fun section with links to Steam, Discord, my PC https://pcpartpicker.com/user/cptobviousremark/saved/6fgp23
// youtube videos with me in them from games
// some photoshop examples?
// Pathfinder builds?
// dotabuff
