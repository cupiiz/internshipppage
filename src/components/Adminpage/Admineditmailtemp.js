import React from 'react';
import { Table, notification, Popconfirm } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import 'antd/dist/antd.css';
import ModalsViewEmail from '../Modals/ModalsViewEmail';
import ModalsEditEmail from '../Modals/ModalsEditEmail';
import ModalsAddEmail from '../Modals/ModalsAddEmail';
class AdminEditMailTemp extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            mailtemp_subject: '',
            mailtemp_text: '',
            mailtemp_id: '',
            openEdit: false,
            dataEdit: [],
            openView: false,
            dataView: [],
            openAdd: false,
            dataAdd: []
        }
    }

    componentDidMount() {
        this._getMailTeamp();
    }

    _getMailTeamp = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/mailtemp/get'
        })
            .then(res => {
                const result = res.data.data.map(row => ({
                    key: row.mailtemp_id,
                    mailtemp_id: row.mailtemp_id,
                    mailtemp_subject: row.subject,
                    mailtemp_text: row.text

                }))
                this.setState({
                    dataSource: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    _addMailTeamp = (data) => {
        console.log(data);
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/mailtemp/create',
            data: {

                mailtemp_subject: data.mailtemp_subject,
                mailtemp_text: data.mailtemp_text
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Create Success',
                    description:
                        'The data added to database.',
                });
                
                this.setState({ openAdd: false })
                this._getMailTeamp();
            })
            .catch(err => {
                
                notification['error']({
                    message: 'Create error',
                    description:
                        'The data can not add to database.',
                });
            })
    }

    _removeMailTeamp = (rowId) => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/mailtemp/delete',
            data: {
                mailtemp_id: rowId
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Delete Success',
                    description:
                        'The data deleted from database.',
                });
                this._getMailTeamp();
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
            url: 'http://localhost:8000/api/mailtemp/edit',
            data: {

                mailtemp_id: data.mailtemp_id,
                mailtemp_subject: data.mailtemp_subject,
                mailtemp_text: data.mailtemp_text
            }
        })
            .then(res => {
                notification['success']({
                    message: 'Edit Success',
                    description:
                        'The data has been edited.',
                });
                this.setState({ openEdit: false })
                this._getMailTeamp();
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
                title: 'Mail_ID',
                dataIndex: 'mailtemp_id',
                key: 'mailtemp_id',
                width: '1%',
            },
            {
                title: 'Subject',
                dataIndex: 'mailtemp_subject',
                key: 'mailtemp_subject',
                width: '10%',
            },
            {
                title: 'View',
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

                width: '1%',
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

                width: '1%',
            },


            {
                title: 'DELETE',
                render: (rowId) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this._removeMailTeamp(rowId.mailtemp_id)}>

                            <button
                                className="btn btn-danger btn-sm"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </Popconfirm>
                    )
                },
                width: '1%',
            }
        ];
        return (

            <div className="viewport">
                <Adminsidebar />

                <div className="content">
                    <p>MANAGE MAILTEMP</p>
                </div>

                {this.state.openEdit && (
                    <ModalsEditEmail
                        open={this.state.openEdit}
                        close={() => this.setState({ openEdit: false })}
                        text="Mailtemp"
                        save={this.onEdit}
                        data={this.state.dataEdit}
                    />
                )}
                {this.state.openView && (
                    <ModalsViewEmail
                        open={this.state.openView}
                        close={() => this.setState({ openView: false })}
                        text="Mailtemp"
                        data={this.state.dataView}
                    />
                )}
                {this.state.openAdd && (
                    <ModalsAddEmail
                        open={this.state.openAdd}
                        close={() => this.setState({ openAdd: false })}
                        text="Mailtemp"
                        save={this._addMailTeamp}
                        data={this.state.dataAdd}
                    />
                )}

                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">

                        <button className="btn-add-new-data"
                            onClick={() => {
                                this.setState({
                                    openAdd: true,
                                
                                })
                            }}>
                            ADD MAILTEMP
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


export default AdminEditMailTemp;