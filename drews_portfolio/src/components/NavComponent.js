import React from "react";
import NameLogo from "./NameLogo";
import NavLinks from "./NavLinks";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const NavComponent = () => {
  return (
    <header>
      <nav className="myNav">
        <Navbar bg="dark" expand="lg">
          <Container>
            <NameLogo />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLinks name="About" classN="about" linkey="/about" />

                <NavLinks name="Contact" classN="contact" linkey="/contact" />

                {/* <Nav.Link className="navLink contact" href="/contact">
                  Contact
                </Nav.Link> */}
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </header>
  );
};

export default NavComponent;
