import React from 'react';
import { Table, notification, Popconfirm } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalEditMentor from '../Modals/ModalsMentor';
import axios from 'axios';
import 'antd/dist/antd.css';


class AdminEditMentor extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            openEdit: false,
            dataEdit: []
        }
    }

    componentDidMount() {
        this._getMentors();
    }

    _getMentors = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/mentors/get'
        })
            .then(res => {
                const result = res.data.data.map(row => ({
                    key: row.mentor_id,
                    mentor_id: row.mentor_id,
                    firstname: row.firstname,
                    lastname: row.lastname,
                    email: row.email,
                    phonenumber: row.phonenumber
                }))
                this.setState({
                    dataSource: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    _addMentors = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/mentors/create',
            data: {
                mentor_firstname: this.state.firstName,
                mentor_lastname: this.state.lastName,
                mentor_email: this.state.email,
                mentor_phonenumber: this.state.phoneNumber
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Create Success',
                    description:
                        'The data added to database.',
                });
                this.setState({ firstName: '' })
                this.setState({ lastName: '' })
                this.setState({ email: '' })
                this.setState({ phoneNumber: '' })
                this._getMentors();
            })
            .catch(err => {
                this.setState({ firstName: '' })
                this.setState({ lastName: '' })
                this.setState({ email: '' })
                this.setState({ phoneNumber: '' })
                notification['error']({
                    message: 'Create error',
                    description:
                        'The data can not add to database.',
                });
            })
    }

    _removeMentors = (rowId) => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/mentors/delete',
            data: {
                mentor_id: rowId
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Delete Success',
                    description:
                        'The data deleted from database.',
                });
                this._getMentors();
            })
            .catch(err => {
                notification['error']({
                    message: 'Delete error',
                    description:
                        'The data can not delete from database.',
                });
            })
    }

    onEdit = (data) => {
        console.log(data);  
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/mentors/edit',
            data: {
                mentor_id:data.mentor_id,
                mentor_firstname: data.firstname,
                mentor_lastname: data.lastname,
                mentor_email: data.email,
                mentor_phonenumber: data.phonenumber
            }
        })
            .then(res => {
                notification['success']({
                    message: 'Edit Success',
                    description:
                        'The data has been edited.',
                });
                this.setState({ openEdit: false})
                this._getMentors();
            })
            .catch(err => {
                notification['error']({
                    message: 'Edit error',
                    description:
                        'The data can not edit',
                });
            })   
    }
    render() {
        const { dataSource } = this.state;
        const columns = [
            {
                title: 'Mentor_ID',
                dataIndex: 'mentor_id',
                key: 'mentor_id',
                width: '10%',
            },
            {
                title: 'First_Name',
                dataIndex: 'firstname',
                key: 'firstname',
                width: '10%',
            },
            {
                title: 'Last_Name',
                dataIndex: 'lastname',
                key: 'lastname',
                width: '10%',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                width: '15%',
            },
            {
                title: 'Phone_Number',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
                width: '10%',
            },

            {
                title: 'EDIT',
                render: (rowId) => {
                    return (
                        <button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                                this.setState({
                                    openEdit: true,
                                    dataEdit: rowId
                                })
                            }}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    )
                },

                width: '5%',
            },
            
           
            {
                title: 'DELETE',
                render: (rowId) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this._removeMentors(rowId.mentor_id)}>

                            <button
                                className="btn btn-danger btn-sm"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </Popconfirm>
                    )
                },
                width: '10%',
            }
        ];
        return (

            <div className="viewport">
                <Adminsidebar />

                <div className="content">
                    <p>MANAGE MENTOR</p>
                </div>
                {this.state.openEdit && (
                    <ModalEditMentor
                        open={this.state.openEdit}
                        close={ () => this.setState({ openEdit: false})}
                        text="Mentor"
                        save={this.onEdit}
                        data={this.state.dataEdit}
                    />
                )}
                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">

                    <span className="sub-title-edit-form-add">First Name</span>
                        <input
                        style={{marginRight:"15px"}}
                            value={this.state.firstName}
                        
                            onChange={e => this.setState({ firstName: e.target.value })}

                        />
                        <span className="sub-title-edit-form-add">Last Name</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.lastName}
                            onChange={e => this.setState({ lastName: e.target.value})}

                        />
                         <span className="sub-title-edit-form-add">Email</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value})}

                        />
                         <span className="sub-title-edit-form-add">Phone Number</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.phoneNumber}
                            onChange={e => this.setState({ phoneNumber: e.target.value})}

                        />

                        <button className="btn-add-new-data" style={{marginTop:"20px"}}
                            onClick={() => this._addMentors()}>
                            ADD MENTOR
                            </button>

                        <br />
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{ pageSize: 5 }}

                        />
                    </div>
                </div>
            </div>

        )
    }
};


export default AdminEditMentor;