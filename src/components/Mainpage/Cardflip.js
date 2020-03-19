
import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../Mainpage/Cardflip.css';
import { Container ,Row ,Col} from "react-bootstrap";

const CardFlip = (props) => {

    

    return (

        
            <div style={{backgroundColor:"#0d0d0d"}} id="position">
            <Container >
                
            <h2 className="header-card">Our Opening Position</h2>
            
            </Container>

            <Container style={{margin:" auto" ,padding:"0"}}>
            <h2 className="header-card">Developer Team</h2>
            <Row>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                   
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide className="card-front-side">
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>
                    
                    
                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>
                </Flippy>
            </div>
            </Col>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide className="card-front-side">
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            <Col>
            <div>
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            </Row>
            </Container>

            <Container style={{margin:" auto" ,padding:"0"}}>
            <h2 className="header-card">Design Team</h2>
            <Row>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                   
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>
                </Flippy>
            </div>
            </Col>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            <Col>
            <div>
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            </Row>
            </Container>
            <Container style={{margin:" auto" ,padding:"0"}}>
            <h2 className="header-card">Marketing Team</h2>
            <Row>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                   
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>
                </Flippy>
            </div>
            </Col>
            <Col>
            <div >
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            <Col>
            <div>
                <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                    
                    style={{width:"300px",height:"350px",margin:"0px auto 30px auto"}}
                >
                    <FrontSide style={{ backgroundColor: '#41669d', padding: "0px" }}>
                        <img className="cardimg" src="../../../bg.png" alt="Front End" />
                    </FrontSide>

                    <BackSide className="card-back-side">
                        <div className="card-font">

                            <p>Front-End Web Developer</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </BackSide>

                </Flippy>
            </div>
            </Col>
            </Row>
            </Container>
            
            </div>
    )


};



export default CardFlip;


