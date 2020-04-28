import React, { Component} from 'react'
import { Form, Input, Button, message, Select, DatePicker, notification} from 'antd';
import Axios from 'axios';
import moment from 'moment';

import './Application.css';

const { Option } = Select;
const { RangePicker } = DatePicker;
class RegisterForm extends Component {

    constructor() {
        super()
        this.state = {
            form: {
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
                resume: ''
            },
            waitingResponse: false,
            university: 0,
            universityData: [],
            team: 0,
            teamData: [],
            position: 0,
            positionData: [],
            formPDF: null,
            pathPDF: ''
        }
    }

    onUpload = (event) => {
        const file = event.target.files[0];
        this.setState({
            formPDF: file
        })
    }

    onSubmitPDF = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('PDF', this.state.formPDF);
        Axios({
            method: 'post',
            url: 'http://localhost:8000/upload',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                const pathPDF = res.data;
                this.setState({
                    pathPDF: pathPDF.data
                })
                return true
            })
            .catch(err => {
                return false
            })
    }

    componentDidMount() {
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
            if (!err) {
                const bodyFormData = new FormData();
                bodyFormData.append('PDF', this.state.formPDF);
                Axios({
                    method: 'post',
                    url: 'http://localhost:8000/upload',
                    data: bodyFormData,
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                    .then(res => {
                        const pathPDF = res.data;
                        this.setState({
                            pathPDF: pathPDF.data
                        })
                        const payload = {
                            first_name: values.first_name,
                            last_name: values.last_name,
                            email: values.email,
                            phoneNumber: values.PhoneNumber,
                            faculty_name: values.faculty,
                            branch_name: values.branch,
                            internship_startdate: moment(values.rangeDate[0]).format('YYYY/MM/DD HH:mm:ss'),
                            internship_enddate: moment(values.rangeDate[1]).format('YYYY/MM/DD HH:mm:ss'),
                            internship_resume: pathPDF.data,
                            university_id: values.uni_id,
                            team_id: values.team_id,
                            position_id: values.position1_id
                        }
                        Axios.post('http://localhost:8000/api/application/create', payload)
                            .then(() => {
                                notification['success']({
                                    message: 'Register Success!!',
                                    description:
                                        'The application has been registed',
                                    duration: 2
                                });
                                window.location.href = '/Applicationreply'
                               
                            })
                            .catch(() => {
                                notification['error']({
                                    message: 'Register Error!!',
                                    description:
                                        'The application can not be regist',
                                    duration: 2
                                });
                                window.location.reload()
                            })
                    })
                    .catch(err => {
                        message.warning("error upload pdf file", 2);
                    })
               

            }
        })
    }

    detectInputNameLength = (e) => {

        if (e.target.value.length > 30) {
            message.warning("Name should not be more than 30 character", 2);
            return false
        }
    }
    detectInputPhoneNumberLength = (e) => {

        if (e.target.value.length > 10) {
            message.warning("The phonenumber should not be more than 10 character", 2);
            return false
        }
    }
    detectInputEducationLength = (e) => {

        if (e.target.value.length > 50) {
            message.warning("The input  should not be more than 50 character", 2);
            return false
        }
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const { waitingResponse, universityData, teamData, positionData } = this.state;

        return (
            <div>
                <Form onSubmit={this.handleSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

                    <Form.Item style={{ marginTop: "3rem" }} label="First Name">
                        {getFieldDecorator('first_name', {
                            rules: [
                                { pattern: /^[a-zA-Zก-๙]*$/, message: 'The input is not valid Name!' },
                                { required: true, message: 'Please input first name.' },
                            ],
                        })(
                            <Input
                                size="large"
                                placeholder="Please input first name"
                                disabled={waitingResponse}
                                maxLength={30}
                                onChange={(e) => this.setState({ first_name: e.target.value })}
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
                                { pattern: /^[a-zA-Zก-๙]*$/, message: 'The input is not valid Name!' },
                                { required: true, message: 'Please input last name.' },
                            ],
                        })(
                            <Input
                                size="large"
                                placeholder="Please input last name"
                                disabled={waitingResponse}
                                maxLength={30}
                                onChange={(e) => this.setState({ last_name: e.target.value })}
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
                                onChange={(e) => this.setState({ email: e.target.value })}
                                maxLength={50}
                                onKeyPress={(e) => {
                                    e.key === 'Enter' && e.preventDefault()
                                }}
                            // DELETE FROM students WHERE id=6;
                            />,
                        )}
                    </Form.Item>

                    <Form.Item label="Phone Number">
                        {getFieldDecorator('PhoneNumber', {

                            rules: [
                                { pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/, message: 'The input is not valid phonenumber' },
                                { required: true, message: 'Please input phonenumber.' },
                            ],
                        })(
                            <Input

                                size="large"
                                placeholder="Please input phonenumber"
                                disabled={waitingResponse}
                                maxLength={10}
                                onChange={(e) => this.setState({ phoneNumber: e.target.value })}
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
                                showSearch
                                optionFilterProp="children"
                                style={{ width:"65%" }}
                                placeholder="Please select University"
                                onChange={(value) => this.setState({ university: value })}
                                
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
                                { message: 'The input is not valid Name!' },
                                { required: true, message: 'Please input faculty name.' },
                            ],
                        })(
                            <Input
                                size="large"
                                placeholder="Please input faculty name"
                                disabled={waitingResponse}
                                maxLength={50}
                                onChange={(e) => this.setState({ faculty_name: e.target.value })}
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
                                { message: 'The input is not valid Name!' },
                                { required: true, message: 'Please input branch name.' },
                            ],
                        })(
                            <Input
                                size="large"
                                placeholder="Please input branch name"
                                disabled={waitingResponse}
                                maxLength={50}
                                onChange={(e) => this.setState({ branch_name: e.target.value })}
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
                                style={{ width: "50%" }}
                                placeholder="Please select Team"
                                onChange={(value) => this.setState({ team: value })}
                            >
                                {teamData.map(values => {


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
                                style={{ width: "50%" }}
                                placeholder="Please select Position"
                                onChange={(value) => this.setState({ position: value })}
                            >
                                {positionData
                                    .filter(val => val.team_id === this.state.team)
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
                        {getFieldDecorator('rangeDate', {
                            rules: [
                                { required: true, message: 'Please select date.' },
                            ],
                            initialValue: undefined
                        })(
                            <RangePicker style={{width:"100% "}} size={'large'} onChange={(value) => {
                                this.setState({ startDate: value[0], endDate: value[1] })
                            }} />
                        )}
                    </Form.Item>


                    <Form.Item label="Resume">
                        <input
                            type="file"
                            
                            name="upload"
                            accept="application/pdf"
                            onChange={this.onUpload}
                        />
                    </Form.Item>


                    <Button size="large" className="btn-register" htmlType="submit">Submit Application</Button>

                </Form>

            </div>
        )
    }
}

const RegisterFormManage = Form.create({ name: 'normalFormValidate' })(RegisterForm);
export default RegisterFormManage;
