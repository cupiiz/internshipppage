import React from 'react';
import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import './Adminmainpage.css';
import { Link} from "react-router-dom";
const adminsidebar = (props) => {
    return (

        <div className="sidebar">
            <header className="headimg">
                <img
                    src="../../../logo.png"
                    width="auto"
                    height="80px"
                />
            </header>
            <ul className="sidebarmenu2">
                <Link to='/trwdatatable'>
                        <li className="sidebarmenu">
                            THE RUNWAY AGENCY
                        </li>
                    
                </Link>

                <a href="">
                    <li className="sidebarmenu">
                        TECMOVE
                    </li>
                </a>
                <a href="">
                    <li className="sidebarmenu">
                        ADMIN
                     </li>
                </a>
                <a href="">
                    <li className="sidebarmenu">
                        LOGOUT
                    </li>
                </a>
            </ul>
        </div>

    )
};


export default adminsidebar;