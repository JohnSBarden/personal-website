import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import "./Layout.scss";


function Layout({ children }) {
  return (
    <Container id="layout">
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  );
}

export { Layout };