import React, { Component, Fragment } from 'react'
import { Form, Input, Button, message, Select, DatePicker, notification, Upload } from 'antd';
import Axios from 'axios';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';


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
                resume:''
            },
            waitingResponse: false,
            university: 0,
            universityData: [],
            team: 0,
            teamData: [],
            position: 0,
            positionData: []
        }
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
                const payload = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    phoneNumber: values.PhoneNumber,
                    faculty_name: values.faculty,
                    branch_name: values.branch,
                    internship_startdate: moment(values.rangeDate[0]).format('YYYY/MM/DD HH:mm:ss'),
                    internship_enddate: moment(values.rangeDate[1]).format('YYYY/MM/DD HH:mm:ss'),
                    internship_resume: null,
                    university_id: values.uni_id,
                    team_id: values.team_id,
                    position_id: values.position1_id,
                    resume:values.resume
                }

                Axios.post('http://localhost:8000/api/application/create', payload)
                    .then(() => {

                        notification['success']({
                            message: 'Register Success!!',
                            description:
                                'description na',
                            duration: 2
                        });

                        setTimeout(() => { window.location.href = '/' }, 2000);

                    })
                    .catch(() => {
                        notification['error']({
                            message: 'Register Error!!',
                            description:
                                'description na',
                            duration: 2
                        });

                        setTimeout(() => { window.location.reload() }, 1000);
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

        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
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
                                style={{ width: 240 }}
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
                           <RangePicker size={'large'} onChange={(value) => {
                        this.setState({ startDate: value[0], endDate: value[1] })
                            }} />
                        )}
                    </Form.Item>


                    <Form.Item label="Resume">
                            <Upload {...props}>
                                <Button >
                                    <UploadOutlined/> Click to Upload
                                </Button>
                            </Upload>

                    </Form.Item>


                    <Button size="large" className="btn-register" htmlType="submit">Submit Application</Button>

                </Form>

            </div>
        )
    }
}

const RegisterFormManage = Form.create({ name: 'normalFormValidate' })(RegisterForm);
export default RegisterFormManage;
