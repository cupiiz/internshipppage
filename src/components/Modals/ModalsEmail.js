import React from 'react';
import Modal from 'react-modal';
import { Button, Form, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import './Modals.css';
import Axios from 'axios';
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

function ModalsEmail({ open, close, save, text, data, emailTmp }) {
    console.log('data', data);


    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState(0);

    const textEmail = email != 0 ? emailTmp.filter(val => val.mailtemp_id == email).map(val => val.text) : '';

    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Edit Data"
        >
            <h1>APPLICATION REPLY</h1>
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

                <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={3}>
                        {`Status :`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control plaintext readOnly defaultValue={data.status} />
                    </Col>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="Approve"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={() => setStatus('Approve')}
                        />
                        <Form.Check
                            type="radio"
                            label="Decline"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={() => setStatus('Decline')}

                        />

                    </Col>
                </Form.Group>

                {status == "Approve" && (
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control as="select" onChange={event => setEmail(event.target.value)}>
                            {emailTmp.map((values, index) => {
                                return (
                                    <option key={index} value={values.mailtemp_id}>{values.subject}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                )}
                {status == "Decline" && (
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control as="select" onChange={event => setEmail(event.target.value)}>
                            {emailTmp.map((values, index) => {
                                return (
                                    <option key={index} value={values.mailtemp_id}>{values.subject}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                )}
                {email != 0 && (
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Text:</Form.Label>
                        <Form.Label>{textEmail[0]}</Form.Label>
                    </Form.Group>
                )}

                

                







                <br />
                <Button onClick={close} className="btn-modal">Close</Button>

                <Button className="btn-modal" onClick={() => save({
                    application_id: data.application_id,
                    status: status,
                    email: data.email,
                    mailtemp_id: email
                })}>Reply</Button>



            </Form>
        </Modal>
    );
}

export default ModalsEmail;