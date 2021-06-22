import React, { FunctionComponent } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link to="/">Footer Link</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
