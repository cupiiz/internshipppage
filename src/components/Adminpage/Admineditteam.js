import React from 'react';
import { Table, notification, Popconfirm } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalEditTeam from '../Modals/ModalsTeam';
import axios from 'axios';
import 'antd/dist/antd.css';


class AdminEditTeam extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            teamName: '',
            openEdit: false,
            dataEdit: []
        }
    }

    componentDidMount() {
        this._getTeam();
    }

    _getTeam = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/team/get'
        })
            .then(res => {
                const result = res.data.data.map(row => ({
                    key: row.team_id,
                    team_id: row.team_id,
                    team_name: row.team_name
                }))
                this.setState({
                    dataSource: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    _addTeam = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/team/create',
            data: {
                team_name: this.state.teamName
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Create Success',
                    description:
                        'The data added to database.',
                });
                this.setState({ teamName: '' })
                this._getTeam();
            })
            .catch(err => {
                this.setState({ teamName: '' })
                notification['error']({
                    message: 'Create error',
                    description:
                        'The data can not add to database.',
                });
            })
    }

    _removeTeam = (rowId) => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/team/delete',
            data: {
                team_id: rowId
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Delete Success',
                    description:
                        'The data deleted from database.',
                });
                this._getTeam();
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
            url: 'http://localhost:8000/api/team/edit',
            data: {
                team_id: data.team_id,
                team_name: data.team_name,
            }
        })
            .then(res => {
                notification['success']({
                    message: 'Edit Success',
                    description:
                        'The data has been edited.',
                });
                this.setState({ openEdit: false})
                this._getTeam();
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
                title: 'Team_ID',
                dataIndex: 'team_id',
                key: 'team_id',
                width: '20%',
            },
            {
                title: 'Team_Name',
                dataIndex: 'team_name',
                key: 'team_name',
                width: '50%',
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

                width: '10%',
            },
            
           
            {
                title: 'DELETE',
                render: (rowId) => {
                    return (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this._removeTeam(rowId.team_id)}>

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
                    <p>MANAGE TEAM</p>
                </div>
                {this.state.openEdit && (
                    <ModalEditTeam
                        open={this.state.openEdit}
                        close={ () => this.setState({ openEdit: false})}
                        text="Team"
                        save={this.onEdit}
                        data={this.state.dataEdit}
                    />
                )}
                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">

                        <span className="sub-title-edit-form-add">Team Name</span>
                        <input
                            style={{ marginRight: "15px" }}
                            value={this.state.teamName}
                            onChange={e => this.setState({ teamName: e.target.value })}
                        />

                        <button className="btn-add-new-data"
                            onClick={() => this._addTeam()}>
                            ADD TEAM
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


export default AdminEditTeam;