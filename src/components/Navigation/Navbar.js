import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../Navigation/Navbar.css';
import { Link} from "react-scroll";

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
              duration={800}
            >            
        <Navbar.Brand className="mr-auto" style={{ width: "auto",margin:"5px 0px 5px 28px", display: "flex" }}>
          
            <img
              src="../../../logo.png"
              width="110pX"
              height="auto"
              
              alt=""
            />
        </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className="ml-auto" style={{ textAlign: "right" ,marginBottom:"5px" ,marginRight:"10px"}}>
            <a  className="nav-font" onClick={ () => openLink() }>Company Website</a>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="nav-font"
            >
              About
            </Link>
            
            <Link
              activeClass="active"
              to="position"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="nav-font"
            >
              Position
            </Link>
            <Link
              activeClass="active"
              to="joinus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="nav-font"
            >
              Join Us
            </Link>

          </Nav>
        </Navbar.Collapse>
       
        </Container>
         </Navbar>
 
  )
};

export default navbar;