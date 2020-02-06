
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../Navigation/Navbar.css';
import Aux from '../hoc/Auxx';
import { Link as Linklogin} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const navbar = (props) => {

  const openLink = () => {
    window.open('https://therunwayagency.com/', '_blank ')
  }

  return (

    

<Navbar fixed="top" style={{ backgroundColor: '#0d0d0d', padding: 0 }} collapseOnSelect expand="lg">
      <Container>
      <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >            
        <Navbar.Brand className="mr-auto" style={{ width: "auto",marginLeft:"28px", display: "flex" }}>
          
            <img
              src="../../../logo.png"
              width="110pX"
              height="auto"
              
            />
        </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="ml-auto" style={{ textAlign: "right" }}>
            <Nav.Link className="nav-font" onClick={ () => openLink() }>Company Website</Nav.Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link className="nav-font" >About</Nav.Link>
            </Link>
            
            <Link
              activeClass="active"
              to="position"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link className="nav-font">Position</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="joinus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link className="nav-font" >Join Us</Nav.Link>
            </Link>
            
            
            <Nav.Link>
            <Linklogin to='/adminlogin' className="nav-font">
              Login
              </Linklogin>
              </Nav.Link>

          </Nav>
        </Navbar.Collapse>
       
        </Container>
         </Navbar>
 
  )
};

export default navbar;