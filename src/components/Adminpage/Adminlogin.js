import React from 'react';
import './Adminlogin.css';
import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";


const adminlogin = (props) => {
    return (
        <div className="auth-box-2">

        
        <div className="auth-box" >
            <h5 className="margin-0 text-center topic">LOGIN</h5>
            <hr className="line"></hr>
                    <Form  controlId="formGridEmail" >
                      
                        <Form.Control type="email" placeholder="Email" />
                    </Form>

                    <Form  controlId="formGridPassword" >
                        
                        <Form.Control type="text" placeholder="Password" />
                    </Form>
                    <Link to='/adminmainpage'> 
                <button type="submit" class="btn btn-primary">Login</button>
                </Link>
        </div>
        {/* className="nav-font" */}
        </div>
            )
            };
            
export default adminlogin;