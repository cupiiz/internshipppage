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

function ModalsViewEmail({ open, close, text, data }) {
    
    
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Application View"
        >
            <h1>Emailteamp</h1>
            <Form>
                <Form.Group as={Row} >
                    <Form.Label column sm="2" >
                        {` Subject :`}
                    </Form.Label>
                    <Col sm="10">
                    <Form.Label column sm="20">
                        {data.mailtemp_subject}
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        {` Text :`}
                    </Form.Label>
                    <Col sm="10">
                    <Form.Label column sm="20">
                        {data.mailtemp_text}
                    </Form.Label>
                    </Col>
                </Form.Group>




                <Button onClick={close} className="btn-modal">Close</Button>
                
            </Form>

        </Modal>
    );
}

export default ModalsViewEmail;