import React from 'react';
import { Container } from 'react-bootstrap'
import Navbarapp from '../Navigation/Navbarapp';

import RegisterForm from './RegisterForm';


class Application extends React.Component {
    render(){
        return(

            <div className="layout-out-application">
                <Navbarapp/>
                <Container>
                    <div className="register-form-application">
                        <p className="header-form-application">APPLICATION FORM</p>
                        <RegisterForm />
                    </div>
                </Container>
            </div>
        )
    }
}

export default Application;
