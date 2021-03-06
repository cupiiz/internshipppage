import React from 'react'

import './Adminmainpage.css';
import { Link } from "react-router-dom";

class Adminsidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            adminMenu: false
        }
    }
    onLogout = () => {
        localStorage.clear();
        window.location.href = '/home';
    }
    render() {
        const { adminMenu } = this.state;

        return (
            <div className="sidebar">
                <header className="headimg">
                    <img
                        src="../../../logo.png"
                        width="auto"
                        height="80px"
                        alt=""
                    />
                </header>
                <ul className="sidebarmenu2">
                    <Link to='/trwdatatable'>
                        <li className="sidebarmenu">
                            APPLICATION
                            </li>

                    </Link>
                    <Link to='/approvedapp'>
                        <li className="sidebarmenu">
                            APPROVED APPLICATION
                            </li>

                    </Link>
                    <Link to='/declineapp'>
                        <li className="sidebarmenu">
                           DECLINE APPLICATION
                            </li>

                    </Link>
                    
                    <li className={`sidebarmenu ${adminMenu ? 'btn-active' : ''}`} onClick={() => { this.setState({ adminMenu: !adminMenu }) }} >
                        ADMIN
                    </li>
                    
                    {adminMenu && (
                        <>
                            <Link to='/adminmainpage'>
                                <li className="sub-sidebarmenu">
                                MANAGE MAIN PAGE
                            </li>
                            </Link>

                            <Link to='/admineditteam'>
                                <li className="sub-sidebarmenu">
                                MANAGE TEAM
                            </li>
                            </Link>
                            <Link to='/admineditposition'>
                                <li className="sub-sidebarmenu">
                                MANAGE POSITION
                            </li>
                            </Link>
                            <Link to='/admineditmentor'>
                                <li className="sub-sidebarmenu">
                                MANAGE MENTOR
                            </li>
                            </Link>
                            <Link to='/admineditmailtemp'>
                                <li className="sub-sidebarmenu">
                                MANAGE MAILTEMP
                            </li>
                            </Link>
                            
                        </>
                    )}

                    <li className="sidebarmenu" onClick={this.onLogout}>
                        LOGOUT
                    </li>
                </ul>
            </div>
        )
    }

}

export default Adminsidebar;