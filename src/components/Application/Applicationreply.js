import React from 'react';

import { Container} from 'react-bootstrap';
import '../Application/Application.css';
import Image from 'react-bootstrap/Image'
import banner from '../../assets/img/bg.png';
import Navbarapp from '../Navigation/Navbarapp';
import Footer from '../Footer/Footer';

const applicationreply = (props) => {
return(
    <div >
<Navbarapp/>
<Image src={banner} width="100% " fluid/> 
        <Container style={{width:"50%"}} className="fix-app-form">
        
            <div className="header">Thank you for your application</div>
            <p className="normal-text" style={{paddingBottom:"50px"}}>We will get back to you as soon as possible.
Please check your spam folder regularly as e-mails from Thailand might end up there.</p>
         
        </Container>
        <Footer/>
        </div>
)
};

export default applicationreply;