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

function ModalEditMentor({ open, close, save, text, data }) {
 
    const [firstName, setFirstName] = React.useState(data.mentor_firstname)
    const [lastName, setLastName] = React.useState(data.mentor_lastname)
    const [email, setEmail] = React.useState(data.mentor_email)
    const [phoneNumber, setPhoneNumber] = React.useState(data.mentor_phonenumber)
    

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
                    <Form.Label column sm="5">
                        {`New ${text} First Name`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" defaultValue={data.mentor_firstname}  onChange={(e) => setFirstName(e.target.value)} />
                       
                    </Col>
                </Form.Group>


                <Form.Group as={Row} >
                    <Form.Label column sm="5">
                        {`New ${text} Last Name`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text"  defaultValue={data.mentor_lastname} onChange={(e) => setLastName(e.target.value)} />
                    </Col>
                </Form.Group>


            
                <Form.Group as={Row} >
                    <Form.Label column sm="5">
                        {`New ${text} Email`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" defaultValue={data.mentor_email}  onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Form.Group>


              

                <Form.Group as={Row} >
                    <Form.Label column sm="5">
                        {`New ${text} Phone Number`}
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" defaultValue={data.mentor_phonenumber}  onChange={(e) => setPhoneNumber(e.target.value)} />
                    </Col>
                </Form.Group>


                <Button onClick={close} className="btn-modal">Close</Button>
                <Button className="btn-modal" onClick={() => save({
                    mentor_id :data.mentor_id,
                    
                    mentor_firstname :firstName,
                    mentor_lastname : lastName,
                    mentor_email : email,
                    mentor_phonenumber :phoneNumber
                    
                })}>Update</Button>
            </Form>

        </Modal>
    );
}

export default ModalEditMentor;