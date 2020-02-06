import React from 'react';
import Aux from '../hoc/Auxx';
import '../Mainpage/Mainpage.css';
import { Container, Card, CardDeck, Carousel, Button } from 'react-bootstrap';
import CardFlip from './Cardflip';
import { NavLink } from "react-router-dom";
import Joinus from "../Mainpage/Joinus";

const mainpage = (props) => (
    <Aux>


        <Container id="about">
            <h2 className="header-2">THE RUNWAY AGENCY X INTERNSHIP</h2>
            <p className="normal-text">We are a full-service digital provider. We are both consultants in business planning, marketing plans and digital content media creators, including software development that will help develop your business. And society to move steadily and sustainably.</p>
            
        </Container>

        <Container>

            <CardDeck style={{ marginTop: "60px " }}>

                <Card style={{ backgroundColor: "#171717", border: "0px" }}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor: "#171717", padding: "0px", marginTop: "20px" }}>
                        <Card.Title className="green-text">TEAM WORK</Card.Title>
                        <Card.Text className="normal-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>

                </Card>

                <Card style={{ backgroundColor: "#171717", border: "0px" }}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor: "#171717", padding: "0px", marginTop: "20px" }}>
                        <Card.Title className="green-text">PlANNING</Card.Title>
                        <Card.Text className="normal-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>

                </Card>

                <Card style={{ backgroundColor: "#171717", border: "0px" }}>
                    <Card.Img variant="top" src="../../../bg.png" />
                    <Card.Body style={{ backgroundColor: "#171717", padding: "0px", marginTop: "20px" }}>
                        <Card.Title className="green-text">MEETING</Card.Title>
                        <Card.Text className="normal-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardDeck>

            <Container style={{ maxWidth: "100% ", padding: "0" }}>
                <Carousel style={{ marginTop: "50px ", width: "100%" }}>

                    <Carousel.Item >
                        <img
                            className="box-co"
                            src="../../../bg.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>1</h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="box-co"
                            src="../../../bg.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="box-co"
                            src="../../../bg.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>3</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </Container>
        <div style={{ backgroundColor: "#1a1a1a" }}>>

            <CardFlip />
        </div>

        <Container>
            <Joinus/>
        </Container>

    </Aux>
);
export default mainpage;