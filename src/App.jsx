import React from "react";
import "./styles/App.scss";
import { Footer } from "./Components/Footer";
import { Container } from "react-bootstrap";
import Main from "./Components/Main";
import Header from "./Components/Header";

function App(props) {
  return (
    <Container fluid className="App">
      <Header />
      <Main />
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
