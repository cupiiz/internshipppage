import React from 'react';
import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { Link} from "react-router-dom";

const showdatapage = (props) => {
    return (

        <div className="viewport">
            <Adminsidebar />

            <div className="content">
                <h1>Information Id 1</h1>
            </div>
            <div className="container-fluid showdatapage-layout">
                <div className="personalinfo-layout">

                    <h1 className="personalinfo-header">Personal Information</h1>
                   
                        <Container >
                        
                            
                            <div className="d-flex box">
                                <span  >Full Name:</span>
                                <span >Phisit Chuthaphongtham</span>
                            </div>
                            
                            <div className="d-flex box">
                                <span  >Email:</span>
                                <span >ps.ctpt@gmail.com</span>
                            </div>
                                
                            <div className="d-flex box">
                                <span  >Phone Number:</span>
                                <span >095-759-6367</span>
                            </div>
                            <div className="d-flex box">
                                <span  >University:</span>
                                <span >Chiang Mai University</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Faculty:</span>
                                <span >CAMT</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Branch:</span>
                                <span >Software Engineer</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Team:</span>
                                <span >Developer Team</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Job Position:</span>
                                <span >Front-End Web Developer</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Start Date:</span>
                                <span >06/01/2020</span>
                            </div>
                            <div className="d-flex box">
                                <span  >End Date:</span>
                                <span >24/04/2020</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Mentor:</span>
                                <span >Kevin Cox</span>
                            </div>
                            <div className="d-flex box">
                                <span  >Resume:</span>
                                
                                
                            </div>

                        </Container>

                   
                </div>

                <div className="showdata-close-button">
                <Link to='/trwdatatable'>
                    <button className="btn btn-danger btn-ml " >
                        Close
                            </button>
                           </Link>
                </div>
            </div>

        </div>

    )
};


export default showdatapage;