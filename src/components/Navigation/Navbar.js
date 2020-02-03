
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../Navigation/Navbar.css';
import Aux from '../hoc/Auxx';
import { Link } from "react-router-dom";

const navbar = (props) => {

  const _openLink = () => {
    window.open('https://therunwayagency.com/', '_blank ')
  }

  return (
    
      <Navbar sticky="top" style={{ backgroundColor:  '#1b1b1b'}} collapseOnSelect expand="lg" >
        <Navbar.Brand >
          <Link to='/home'>
            <img
              src="../../../logo.png"
              width="80pX"
              height="auto"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{textAlign:"right"}}>
            <Nav.Link className="nav-font" onClick={ () => _openLink() }>Company Website</Nav.Link>
            <Nav.Link className="nav-font" >About</Nav.Link>
            <Nav.Link className="nav-font">Position</Nav.Link>
            <Nav.Link className="nav-font" >Join Us</Nav.Link>
            <Nav.Link className="nav-font">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
  )
};

export default navbar;