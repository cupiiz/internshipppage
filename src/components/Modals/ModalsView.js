import React from 'react';
import Modal from 'react-modal';
import { Button, Form, Col, Row } from 'react-bootstrap';
import './Modals.css';
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    },
    content: {
        position: 'absolute',
      top: '5%',
      left: '25%',
      right: '25%',
      bottom: '5%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '50px'
    }
};


Modal.setAppElement('#root')

function ModalsView({ open, close, text, data }) {
    
    
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Application View"
        >
            <h1>APPLICATION</h1>
            <Form>
                <Form.Group as={Row} >
                    <Form.Label column sm="3" className="x">
                        {` First Name :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.firstname}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Last Name :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.lastname}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Email :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.email}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Phonenumber :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.phonenumber}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` University :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.university}
                    </Form.Label>
                    </Col>
                </Form.Group>
               
                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Faculty :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.faculty_name}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Branch :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.branch_name}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Team :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.team_name}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Position :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.positions_name}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Start Date :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.internship_startdate}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` End Date :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.internship_enddate}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Resume :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.internship_resume}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="3">
                        {` Status :`}
                    </Form.Label>
                    <Col sm="5">
                    <Form.Label column sm="20">
                        {data.status}
                    </Form.Label>
                    </Col>
                </Form.Group>




                <Button onClick={close} className="btn-modal">Close</Button>
                
            </Form>

        </Modal>
    );
}

export default ModalsView;