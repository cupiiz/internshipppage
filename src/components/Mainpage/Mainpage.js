import React from 'react';
import Aux from '../hoc/Auxx';
import '../Mainpage/Mainpage.css';
import { Container, Card, CardDeck } from 'react-bootstrap';
const mainpage = (props) => (
    <Aux>
        <Container style={{ maxWidth: "50% "}}>
            <div className="header-2">THE RUNWAY AGENCY X INTERNSHIP</div>
            <div className="normal-text"><p>We are a full-service digital provider. We are both consultants in business planning, marketing plans and digital content media creators, including software development that will help develop your business. And society to move steadily and sustainably.</p></div>
        </Container>

        <Container>

            <CardDeck style={{ marginTop: "60px "}}>
                <Card style={{ backgroundColor:"#171717", border:"0px"}}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor:"#171717",padding:"0px",marginTop:"20px"}}>
                        <Card.Title className="green-text">TEAM WORK</Card.Title>
                        <Card.Text className="normal-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card style={{ backgroundColor:"#171717", border:"0px"}}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor:"#171717",padding:"0px",marginTop:"20px"}}>
                        <Card.Title className="green-text">PlANNING</Card.Title>
                        <Card.Text className="normal-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card style={{ backgroundColor:"#171717", border:"0px"}}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor:"#171717",padding:"0px",marginTop:"20px"}}>
                        <Card.Title className="green-text">MEETING</Card.Title>
                        <Card.Text className="normal-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardDeck>

        </Container>



        <main>
            {props.children}
        </main>
    </Aux>
);
export default mainpage;