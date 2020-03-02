import React from 'react';
import './Adminlogin.css';
import { Form} from 'react-bootstrap';



class adminlogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }


    render() {
        const { username, password } = this.state;
        const { onLogin } = this.props;
        return (
            <div className="auth-box-2" >


                <div className="auth-box" >
                    <h5 className="margin-0 text-center topic">LOGIN</h5>
                    <hr className="line"></hr>
                    <Form controlId="formGridEmail" >
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => this.setState({ username: e.target.value })} />
                    </Form>

                    <Form controlId="formGridPassword" >
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })} />
                    </Form>
                    <button class="btn btn-primary" onClick={ e => onLogin({
                        username: username,
                        password: password
                    })}>Login</button>
                </div>
                {/* className="nav-font" */}
            </div>
        )
    }
};

export default adminlogin;