import React from 'react';

import '../Mainpage/Mainpage.css';

import { NavLink } from "react-router-dom";
import '../Footer/Footer.css';

const footer = (props) => {
   return(
        <div className="footer-bg">   
        <p className="footer-font">© Copyright 2019 THE RUNWAY AGENCY</p>
        
        <p >
        <NavLink className="footer-font-link footer-font" to="/privacypolicy">
        Privacy Policy
        </NavLink >
        <span style={{color:"#383d41"}}> | </span>
        <NavLink className="footer-font-link footer-font" to="/termsofuse">
        Terms of Use
        </NavLink >
        </p>
     
            
        </div >   
)
};

export default footer;