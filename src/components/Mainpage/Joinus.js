import React from 'react';
import Aux from '../hoc/Auxx';
import '../Mainpage/Mainpage.css';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Joinus.css';

const joinus = (props) => (
    <Aux>


        <Container id="joinus" >
            <NavLink to="/application">
                <Button className="button-main" >
                    <p style={{ color: "#03a84e", fontSize: "32px" }} className="btn-join-event" >JOIN US</p>
                </Button>
            </NavLink >
        </Container >

    </Aux>
);
export default joinus;