import "./Layout.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Container className="layout">
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  );
}
