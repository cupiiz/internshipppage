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
            mentor_firstName: '',
            mentor_lastName: '',
            mentor_email: '',
            mentor_phoneNumber: '',
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
                    mentor_firstname: row.mentor_firstname,
                    mentor_lastname: row.mentor_lastname,
                    mentor_email: row.mentor_email,
                    mentor_phonenumber: row.mentor_phonenumber
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
                mentor_firstname: this.state.mentor_firstName,
                mentor_lastname: this.state.mentor_lastName,
                mentor_email: this.state.mentor_email,
                mentor_phonenumber: this.state.mentor_phoneNumber
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Create Success',
                    description:
                        'The data added to database.',
                });
                this.setState({ mentor_firstName: '' })
                this.setState({ mentor_lastName: '' })
                this.setState({ mentor_email: '' })
                this.setState({ mentor_phoneNumber: '' })
                this._getMentors();
            })
            .catch(err => {
                this.setState({ mentor_firstName: '' })
                this.setState({ mentor_lastName: '' })
                this.setState({ mentor_email: '' })
                this.setState({ mentor_phoneNumber: '' })
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
                mentor_firstname: data.mentor_firstname,
                mentor_lastname: data.mentor_lastname,
                mentor_email: data.mentor_email,
                mentor_phonenumber: data.mentor_phonenumber
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
                dataIndex: 'mentor_firstname',
                key: 'mentor_firstname',
                width: '10%',
            },
            {
                title: 'Last_Name',
                dataIndex: 'mentor_lastname',
                key: 'mentor_lastname',
                width: '10%',
            },
            {
                title: 'Email',
                dataIndex: 'mentor_email',
                key: 'mentor_email',
                width: '15%',
            },
            {
                title: 'Phone_Number',
                dataIndex: 'mentor_phonenumber',
                key: 'mentor_phonenumber',
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
                            value={this.state.mentor_firstName}
                        
                            onChange={e => this.setState({ mentor_firstName: e.target.value })}

                        />
                        <span className="sub-title-edit-form-add">Last Name</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.mentor_lastName}
                            onChange={e => this.setState({ mentor_lastName: e.target.value})}

                        />
                         <span className="sub-title-edit-form-add">Email</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.mentor_email}
                            onChange={e => this.setState({ mentor_email: e.target.value})}

                        />
                         <span className="sub-title-edit-form-add">Phone Number</span>
                        <input
                            style={{marginRight:"15px"}}
                            value={this.state.mentor_phoneNumber}
                            onChange={e => this.setState({ mentor_phoneNumber: e.target.value})}

                        />

                        <button className="btn-add-new-data" style={{marginTop:"20px"}}
                            onClick={() => this._addMentors()}>
                            ADD MENTOR
                            </button>

                        <br />
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{ pageSize: 7 }}

                        />
                    </div>
                </div>
            </div>

        )
    }
};


export default AdminEditMentor;