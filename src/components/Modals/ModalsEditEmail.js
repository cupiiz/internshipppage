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

function ModalsEditEmail({ open, close, save, text, data }) {

    const [editSubject, setSubject] = React.useState(data.mailtemp_subject)
    const [editText, setText] = React.useState(data.mailtemp_text)
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Edit Mail"
        >
            <h1>EDIT Mailtemp</h1>
            <Form>


                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        {`Subject :`}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" defaultValue={data.mailtemp_subject} onChange={(e) => setSubject(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text :</Form.Label>
                    <Form.Control defaultValue={data.mailtemp_text} as="textarea" rows="3" onChange={(e) => setText(e.target.value)}/>
                </Form.Group>

                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                    mailtemp_id: data.mailtemp_id,
                    mailtemp_subject: editSubject,
                    mailtemp_text: editText
                })}>Update</Button>
            </Form>

        </Modal>
    );
}

export default ModalsEditEmail;