
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../Navigation/Navbar.css';

import { Link } from "react-router-dom";


const navbarapp = (props) => {

  const openLink = () => {
    window.open('https://therunwayagency.com/', '_blank ')
  }

  return (

    

<Navbar fixed="top" style={{ backgroundColor: '#0d0d0d', padding: 0 }} collapseOnSelect expand="lg">
      <Container>
      
        <Navbar.Brand className="mr-auto" style={{ width: "auto",marginLeft:"28px", display: "flex" }}>
        <Link to='/home'>
            <img
              src="../../../logo.png"
              width="110pX"
              height="auto"
              
            />
            </Link>
        </Navbar.Brand>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="ml-auto" style={{ textAlign: "right" }}>
            <Nav.Link className="nav-font" onClick={ () => openLink() }>Company Website</Nav.Link> 
            
            <Nav.Link >
            <Link to='/adminlogin' className="nav-font">
              Login
              </Link>
              </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
       
        </Container>
         </Navbar>
 
  )
};

export default navbarapp;