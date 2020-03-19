import React, { Component } from 'react'
import { Form, Input, Button, message, Select, DatePicker} from 'antd';
import Axios from 'axios';

const { Option } = Select;
const { RangePicker } = DatePicker;
class RegisterForm extends Component {

    constructor(){
        super()
        this.state = {
            form:{
                first_name: '',
                last_name: '',
                email: '',
                phoneNumber: '',
                university_id: '',
                faculty: '',
                branch: '',
                resume: '',
                team: '',
                position: '',
                startDate: '',
                endDate: '',
            },
            waitingResponse: false,
            university: 0,
            universityData: [],
            team: 0,
            teamData: [],
            position:0,
            positionData: []
        }
    }

    componentDidMount(){
        this.loadUniversity();
        this.loadTeam();
        this.loadPosition();
    }

    loadUniversity = () => {
        Axios.get('http://localhost:8000/api/universities/get')
        .then(res => {
            this.setState({
                universityData: res.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    loadTeam = () => {
        Axios.get('http://localhost:8000/api/team/get')
        .then(res => {
            this.setState({
                teamData: res.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    loadPosition = () => {
        Axios.get('http://localhost:8000/api/position/get')
        .then(res => {
            this.setState({
                positionData: res.data.data
            })
            
        })
        .catch(err => {
            console.log(err)
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

    

        this.props.form.validateFields((err, values) => {
            console.log(values);
            console.log(err);
            
            if(!err){

            }
        })
    }

    detectInputNameLength = (e) => {

        if (e.target.value.length >= 30) {
            message.warning("Name should not be more than 30 character", 2);
            return false
        }
    }
    detectInputPhoneNumberLength = (e) => {

        if (e.target.value.length >= 10) {
            message.warning("The phonenumber should not be more than 10 character", 2);
            return false
        }
    }
    detectInputEducationLength = (e) => {

        if (e.target.value.length >= 10) {
            message.warning("The input  should not be more than 50 character", 2);
            return false
        }
    }

   
    render() {
        const { getFieldDecorator } = this.props.form;
        const { waitingResponse, universityData, teamData, positionData } = this.state;
       
        return (
            <div>
                 <Form  onSubmit={this.handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

                        <Form.Item  style={{marginTop:"3rem"}} label="First Name">
                            {getFieldDecorator('first_name', {
                                rules: [
                                    {pattern:/^[a-zA-Zก-๙]*$/, message:'The input is not valid Name!'},
                                    { required: true, message: 'Please input first name.' },
                                ],
                            })(
                                <Input
                                    size="large"
                                    placeholder="Please input first name"
                                    disabled={waitingResponse}
                                    maxLength={30}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    onKeyUp={this.detectInputNameLength}
                                />,
                            )}
                        </Form.Item>


                        <Form.Item label="Last name">
                            {getFieldDecorator('last_name', {
                                rules: [
                                    {pattern:/^[a-zA-Zก-๙]*$/, message:'The input is not valid Name!'},
                                    { required: true, message: 'Please input last name.' },
                                ],
                            })(
                                <Input
                                    size="large"
                                    placeholder="Please input last name"
                                    disabled={waitingResponse}
                                    maxLength={30}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    onKeyUp={this.detectInputNameLength}
                                />,
                            )}
                        </Form.Item>

                        <Form.Item label="Email">
                            {getFieldDecorator('email', {
                                
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                      },
                                    { required: true, message: 'Please input email.' },
                                ],
                            })(
                                <Input
                                    size="large"
                                    placeholder="Please input email"
                                    disabled={waitingResponse}
                                    maxLength={50}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    
                                />,
                            )}
                        </Form.Item>

                        <Form.Item label="Phone Number">
                            {getFieldDecorator('PhoneNumber', {
                                
                                rules: [
                                    {pattern:/^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/, message:'The input is not valid phonenumber'},
                                    { required: true, message: 'Please input phonenumber.' },
                                ],
                            })(
                                <Input
                                    
                                    size="large"
                                    placeholder="Please input phonenumber"
                                    disabled={waitingResponse}
                                    maxLength={10}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    onKeyUp={this.detectInputPhoneNumberLength}
                                />,
                            )}
                        </Form.Item>

                        <Form.Item label="University">
                            {getFieldDecorator('uni_id', {
                                rules: [
                                    { required: true, message: 'Please select University.' },
                                ],
                                initialValue: undefined
                            })(
                                <Select
                                size="large"

                                    style={{ width: 350 }}
                                    placeholder="Please select University"
                                    onChange={ (value) => this.setState({ university: value})}
                                    >
                                    {universityData.map(values => {                                 
                                        return <Option key={values.universities_id} value={values.universities_id} >{values.university}</Option>
                                    })}
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label="Faculty">
                            {getFieldDecorator('faculty', {
                                rules: [
                                    {pattern:/^[a-zA-Zก-๙]*$/, message:'The input is not valid Name!'},
                                    { required: true, message: 'Please input faculty name.' },
                                ],
                            })(
                                <Input
                                    size="large"
                                    placeholder="Please input faculty name"
                                    disabled={waitingResponse}
                                    maxLength={50}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    onKeyUp={this.detectInputEducationLength}
                                />,
                            )}
                        </Form.Item>

                        <Form.Item label="Branch">
                            {getFieldDecorator('branch', {
                                rules: [
                                    {pattern:/^[a-zA-Zก-๙]*$/, message:'The input is not valid Name!'},
                                    { required: true, message: 'Please input branch name.' },
                                ],
                            })(
                                <Input
                                    size="large"
                                    placeholder="Please input branch name"
                                    disabled={waitingResponse}
                                    maxLength={50}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault()
                                    }}
                                    onKeyUp={this.detectInputEducationLength}
                                />,
                            )}
                        </Form.Item>
                        
                        <Form.Item label="Team">
                            {getFieldDecorator('team_id', {
                                rules: [
                                    { required: true, message: 'Please select Team.' },
                                ],
                                initialValue: undefined
                            })(
                                <Select
                                size="large"
                                    style={{ width: 240 }}
                                    placeholder="Please select Team"
                                    onChange={ (value) => this.setState({ team: value})}
                                    >
                                    {teamData.map(values => {  
                                        console.log(values);
                                                                       
                                        return <Option 
                                            key={values.team_id} 
                                            value={values.team_id} >{values.team_name}</Option>
                                    })}
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item label="Position">
                            {getFieldDecorator('position1_id', {
                                rules: [
                                    { required: true, message: 'Please select Position.' },
                                ],
                                initialValue: undefined
                            })(
                                <Select
                                size="large"
                                    style={{ width: 240 }}
                                    placeholder="Please select Position"
                                    onChange={ (value) => this.setState({ position: value})}
                                    >
                                    {positionData
                                        .filter( val => val.team_id === this.state.team)
                                        .map(values => {  
                                        console.log(values);                                 
                                        return <Option 
                                            key={values.position_id} 
                                            value={values.position_id} >{values.positions_name}</Option>
                                    })}
                                </Select>
                            )}
                        </Form.Item>

                      
                        <Form.Item label="Date">
                            
                            {getFieldDecorator('range-date', {
                                rules: [
                                    { required: true, message: 'Please select date.' },
                                ],
                                initialValue: undefined
                            })(
                                
                                <RangePicker size={'large'} />
                            )}
                        </Form.Item>



                        <Button  size="large" className="btn-register" htmlType="submit">Submit Application</Button>
                 </Form>
            </div>
        )
    }
}

const RegisterFormManage = Form.create({ name: 'normalFormValidate' })( RegisterForm );
export default RegisterFormManage;
                                                                                                                                                                                                                                            