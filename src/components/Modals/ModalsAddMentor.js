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

function ModalsAddMentor({ open, close, save, text, data }) {
    console.log('aaa', data);
    
    const [mentorId, setMentorId] = React.useState(data.mentor_id)
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Add Mentor"
        >
            <h1>ADD MENTOR</h1>
            <Form>
                

                <Form.Group as={Row} >
                    <Form.Label column sm="5">
                        {`New Mentor :`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text"  defaultValue={data.mentor_id} onChange={(e) => setMentorId(e.target.value)} />
                       
                    </Col>
                </Form.Group>


                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                    application_id: data.application_id,
                    mentor_id :mentorId
                
                    
                })}>Add</Button>
            </Form>

        </Modal>
    );
}

export default ModalsAddMentor;