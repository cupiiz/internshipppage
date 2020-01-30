
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../Navigation/Navbar.css';

const navbar=(props)=>(
    
<Navbar sticky="top" >
<Container style={{ maxWidth:"960px " }}>
    <Navbar.Brand href="#home">
      <img
        src="../../../logo.png"
        width="auto"
        height="40"
        className="d-inline-block align-top"
        
      />
    </Navbar.Brand>
    <Nav className="justify-content-end, nav-font" activeKey="/home">
    <Nav.Link className="nav-font" href="#home">Company Website</Nav.Link>
      <Nav.Link className="nav-font" href="#features">About</Nav.Link>
      <Nav.Link className="nav-font" href="#pricing">Position</Nav.Link>
      <Nav.Link className="nav-font" href="#join us">Join us</Nav.Link>
      <Nav.Link className="nav-font" href="#pricing">Login</Nav.Link>
  </Nav>
  </Container>
  </Navbar>
 
);

export default navbar;