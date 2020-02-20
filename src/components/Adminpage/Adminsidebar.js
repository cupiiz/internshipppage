import React from 'react';
import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import './Adminmainpage.css';
import { Link} from "react-router-dom";
const adminsidebar = (props) => {
    const onLogout = () => {
        localStorage.clear();
        window.location.href = '/home';
    }
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

                <div href="">
                    <li className="sidebarmenu">
                        TECMOVE
                    </li>
                </div>
                <div>
                    <li className="sidebarmenu">
                        ADMIN
                     </li>
                </div>
                <Link onClick={onLogout}>
                    <li className="sidebarmenu">
                        LOGOUT
                    </li>
                </Link>
            </ul>
        </div>

    )
};


export default adminsidebar;