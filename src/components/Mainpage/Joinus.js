import React from 'react';

import '../Mainpage/Mainpage.css';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Joinus.css';

const joinus = (props) => {
    
return(
    <div id="joinus" style={{padding:"80px 0 "}}>
        <Container  >
            <NavLink to="/application">
                <Button className="button-main" >
                    <p style={{ color: "#03a84e", fontSize: "32px" }} className="btn-join-event" >JOIN US</p>
                </Button>
            </NavLink >
        </Container >
        </div>
)
};
export default joinus;