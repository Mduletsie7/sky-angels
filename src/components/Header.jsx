import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// ::return:: This code renders a Navbar as our page header with the title of the website
// ::TODO:: - Add Sign in / Register button?


function Header() {
  return (
    <div className="header">
      <Navbar bg="transparent" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Sky Angels</Navbar.Brand>

          <div className="header__right">
          <Navbar.Brand href="#home">Services</Navbar.Brand>
          <Navbar.Brand href="#home">About Us</Navbar.Brand>
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Navbar.Brand href="#home">Contact</Navbar.Brand>
            </div>
        </Container>
      </Navbar>
    </div>
  );
}
 
export default Header;