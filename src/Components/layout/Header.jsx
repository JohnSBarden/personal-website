import React from "react";
import {
  faDiceD20
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Border.scss";

function Header() {
  return (
    <div className="header web-border">
      <Navbar>
        <Nav.Link href="/">
          <img
            src={require("../../resources/logo.jpg")}
            className="d-inline-block branding"
            alt="x"
          />
        </Nav.Link>
        <Nav.Link class-name="d-inline-block" href="/">
          <div className="header-link link">John S. Barden</div>
        </Nav.Link>
        <Nav.Link class-name="d-inline-block" href="/personal">
          <div className="header-link link">Personal</div>
        </Nav.Link>
        <Nav.Link class-name="d-inline-block" href="/professional">
          <div className="header-link link">Professional</div>
        </Nav.Link>
        <Nav.Link class-name="d-inline-block" href="/media">
          <div className="header-link link">Media</div>
        </Nav.Link>
        <Nav.Link class-name="d-inline-block" href="http://foundry.johnsbarden.com">
          <FontAwesomeIcon icon="fa-dice-d20" fontSize={'10rem'}
            className="header-link link" style={{ textAlign: 'right' }} />
        </Nav.Link>
        {/*<Form>
          <Form.Check type="switch" id="dark-mode-switch" label="Dark Mode" />
        </Form>*/}
      </Navbar>
    </div>
  );
}

export { Header };
