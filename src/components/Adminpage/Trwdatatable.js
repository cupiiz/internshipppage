import React from 'react';
import { Table, notification, Popconfirm } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash ,faEye,faEnvelope} from '@fortawesome/free-solid-svg-icons';

import ModalsView from '../Modals/ModalsView';
import ModalsEmail from '../Modals/ModalsEmail';
import axios from 'axios';
import 'antd/dist/antd.css';

            

class Trwdatatable extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            internship_startdate:'',
            internship_enddate:'',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            university:'',
            faculty_name:'',
            branch_name:'',
            team_name:'',
            position_name:'',
            team_id:'',
            position_id:'',
            emailTmp: [],
            internship_resume:'',
            status:'',
            openView: false,
            dataView:[],
            openMail:false,
            dataMail:[]
        }
    }

    componentDidMount() {
        this._getApplication();
        this._getTmpEmail();
    }

    _getTmpEmail = () => {
        axios.get('http://localhost:8000/api/mailtemp/get')
            .then( res => this.setState({ emailTmp: res.data.data }))
            .catch( err => console.log(err))
    }

    _getApplication = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/application/get'
        })
            .then(res => {
                const result = res.data.data.map(row => ({
                    key: row.application_id,
                    application_id: row.application_id,
                    internship_startdate:row.internship_startdate,
                    internship_enddate:row.internship_enddate,
                    firstname: row.firstname,
                    lastname: row.lastname,
                    email: row.email,
                    phonenumber: row.phonenumber,
                    university:row.university,
                    faculty_name:row.faculty_name,
                    branch_name:row.branch_name,
                    team_name:row.team_name,
                    positions_name:row.positions_name,
                    internship_resume:row.internship_resume,
                    status:row.status

                }))
                this.setState({
                    dataSource: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    _removeApplication = (rowId) => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/application/delete',
            data: {
                application_id: rowId
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Delete Success',
                    description:
                        'The data deleted from database.',
                });
                this._getApplication();
            })
            .catch(err => {
                notification['error']({
                    message: 'Delete error',
                    description:
                        'The data can not delete from database.',
                });
            })
    }

    statusChange = (data) => {
        console.log(data); 
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/application/statuschange',
            data: {
                app_status: data.status,
                app_id: data.application_id,
                email:data.email,
                idTmp: data.mailtemp_id
            }
        })
            .then(res => {
                notification['success']({
                    message: 'Reply Success',
                    description:
                        'Mail has been reply.',
                });
                
                this.setState({ openMail: false})
                this._getApplication();
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
                title: 'id',
                dataIndex: 'application_id',
                key: 'application_id',
                width: '1%',
            },
            {
                title: 'Firstname',
                dataIndex: 'firstname',
                key: 'firstname',
                width: '3%',
            },
            {
                title: 'Lastname',
                dataIndex: 'lastname',
                key: 'lastname',
                width: '4%',
            },
            
            {
                title: 'Team',
                dataIndex: 'team_name',
                key: 'team_name',
                width: '4%',
            },
            {
                title: 'Position',
                dataIndex: 'positions_name',
                key: 'positions_name',
                width: '5%',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                width: '3%',
            },
            {
                title: '',
                render: (rowId) => {
                    return (
                        <button
                            className="btn btn-primary btn-sm "
                            onClick={() => {
                                this.setState({
                                    openMail: true,
                                    dataMail: rowId
                                })
                            }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    )
                },

                width: '0.01%',
            },
            {
                title: '',
                render: (rowId) => {
                    return (
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                                this.setState({
                                    openView: true,
                                    dataView: rowId
                                })
                            }}
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                    )
                },

                width: '0.01%',
            },          
            {
                title: '',
                render: (rowId) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this._removeApplication(rowId.application_id)}>

                            <button
                                className="btn btn-danger btn-sm"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </Popconfirm>
                    )
                },
                width: '0.01%',
            }
        ];
        return (

            <div className="viewport">
                <Adminsidebar />

                <div className="content">
                    <p>APPLICATION</p>
                </div>
                
                {this.state.openMail && (
                    <ModalsEmail
                        open={this.state.openMail}
                        close={ () => this.setState({ openMail: false})}
                        text="Application"
                        save={this.statusChange}
                        data={this.state.dataMail}
                        emailTmp={this.state.emailTmp}
                    />
                )}

                {this.state.openView && (
                    <ModalsView
                        open={this.state.openView}
                        close={ () => this.setState({ openView: false})}
                        text="Application"
                        data={this.state.dataView}
                    />
                )}

                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">

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


export default Trwdatatable;