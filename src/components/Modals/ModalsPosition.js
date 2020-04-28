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

function ModalEditPosition({ open, close, save, text, data }) {
    console.log('aaa', data);
    const [name, setName] = React.useState(data.positions_name)
    const [id, setId] = React.useState(data.team_id)
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Edit Data"
        >
            <h1>EDIT DATA</h1>
            <Form>
                

                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        {`${text} :`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text"defaultValue={data.positions_name}  onChange={(e) => setName(e.target.value)} />
                    </Col>
                    </Form.Group>


                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        {`Team Id :`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" defaultValue={data.team_id} onChange={(e) => setId(e.target.value)} />
                    </Col>
                </Form.Group>

                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                    position_id: data.position_id,
                    position_name: name,
                    team_id:id

                })}>Update</Button>
            </Form>

        </Modal>
    );
}

export default ModalEditPosition;