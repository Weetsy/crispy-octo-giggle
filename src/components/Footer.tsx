import React, { FunctionComponent } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Footer: FunctionComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="bottom"
      expand="sm"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Footer Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
