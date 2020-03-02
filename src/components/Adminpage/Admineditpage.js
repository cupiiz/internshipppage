import React from 'react';
import { Table, notification } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



class AdminEditForm extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            teamName: ''
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
    render() {
        const { dataSource } = this.state;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'team_name',
                key: 'team_name',
                width: '65%',
            },
            {
                title: 'Edit',
                render: (rowId) => {
                    return (
                        <button
                            className="btn btn-warning btn-sm"
                            onClick={() => console.log(rowId.team_id)}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    )
                },
                width: '10%',
            },
            {
                title: 'Delete',
                render: (rowId) => {
                    return (
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this._removeTeam(rowId.team_id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )
                },
                width: '10%',
            }
        ];
        return (

            <div className="viewport">
                <Adminsidebar />

                <div className="content">
                    <p>MANAGE APPLICATION FORM</p>
                </div>

                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">
                        <p className="sub-title-eidit-form">Manage Team</p>
                        <input
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


export default AdminEditForm;