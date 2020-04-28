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
      top: '25%',
      left: '25%',
      right: '25%',
      bottom: '15%',
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

function ModalsAddEmail({ open, close, save, text, data }) {
    
    const [addSubject, setSubject] = React.useState()
    const [addText, setText] = React.useState()
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Add Mail"
        >
            <h1>Add Mailtemp</h1>
            <Form>


                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        {`Subject :`}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue={''} onChange={(e) => setSubject(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text :</Form.Label>
                    <Form.Control defaultValue={''} as="textarea" rows="3" onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                   
                    mailtemp_subject: addSubject,
                    mailtemp_text: addText
                    
                    
                })}>Update</Button>
                
            </Form>

        </Modal>
        
    );
    
}

export default ModalsAddEmail;