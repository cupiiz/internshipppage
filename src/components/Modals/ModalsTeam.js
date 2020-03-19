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
      bottom: '25%',
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

function ModalEditTeam({ open, close, save, text, data }) {
    console.log('aaa', data);
    const [name, setName] = React.useState('')
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Edit Data"
        >
            <h1>EDIT DATA</h1>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        {` ${text}`}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={data.team_name} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        {`New ${text}`}
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                    team_id: data.team_id,
                    team_name: name
                })}>Update</Button>
            </Form>

        </Modal>
    );
}

export default ModalEditTeam;