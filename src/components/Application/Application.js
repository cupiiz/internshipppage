import React from 'react';

import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import '../Application/Application.css';
import Image from 'react-bootstrap/Image'
import banner from '../../assets/img/bg.png';
import Navbarapp from '../Navigation/Navbarapp';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from 'axios';


const application = (props) => {
    
    
    return(
        <>
        <Navbarapp />
        <Image src={banner} width="100% " fluid />
        <Container style={{ width: "50%" }} className="fix-app-form">

            <div className="header">Application Form</div>
            <Form className="font-color">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridFaculty">
                        <Form.Label>Faculty</Form.Label>
                        <Form.Control type="text" placeholder="Faculty" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBranch">
                        <Form.Label>Branch</Form.Label>
                        <Form.Control type="text" placeholder="Branch" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridTeam">
                        <Form.Label>Team</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPosition">
                        <Form.Label>Position 1</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPosition2">
                        <Form.Label>Position 2</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPosition3">
                        <Form.Label>Position 3</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>
                </Form.Row>
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control >
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridStartDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="text" placeholder="dd/mm" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEndDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="text" placeholder="dd/mm" />
                    </Form.Group>
                </Form.Row>
                <Form.Label>Resume</Form.Label>
                <div className="input-group"  >
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                            Upload
                        </span>
                    </div>
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                </div>
                <Link to='/applicationreply' className="nav-font">
                <Button style={{ backgroundColor: "#03a84e", borderColor: "#03a84e", margin: "35px 0px" }} type="submit">
                   
                        Submit Application
                </Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </>
    )
    };

export default application;