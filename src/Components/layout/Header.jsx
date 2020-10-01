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
            className="branding"
            alt="x"
          />
        </Nav.Link>
        <Nav.Link href="/">
          <div className="header-link">John S. Barden</div>
        </Nav.Link>
        <Nav.Link href="/personal">
          <div className="header-link">Personal</div>
        </Nav.Link>
        <Nav.Link href="/professional">
          <div className="header-link">Professional</div>
        </Nav.Link>
        <Nav.Link href="/media">
          <div className="header-link">Media</div>
        </Nav.Link>
        <Nav.Link href="http://foundry.johnsbarden.com"
          target="_blank"
          rel="noopener noreferrer">
          <div className="header-link"><FontAwesomeIcon icon={faDiceD20} fontSize={'10rem'}
          /> Foundry</div>
        </Nav.Link>
        {/*<Form>
          <Form.Check type="switch" id="dark-mode-switch" label="Dark Mode" />
        </Form>*/}
      </Navbar>
    </div>
  );
}

export { Header };
