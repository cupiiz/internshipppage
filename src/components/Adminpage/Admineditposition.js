import React from 'react';
import { Table, notification, Popconfirm } from 'antd';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'antd/dist/antd.css';
import ModalEditPosition from '../Modals/ModalsPosition';


class AdminEditPosition extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            positionName: '',
            teamId: '',
            openEdit: false,
            dataEdit: []
        }
    }

    componentDidMount() {
        this._getPosition();
    }

    _getPosition = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/position/get'
        })
            .then(res => {
                const result = res.data.data.map(row => ({
                    key: row.position_id,
                    position_id: row.position_id,
                    positions_name: row.positions_name,
                    team_name: row.team_name,
                    team_id: row.team_id
                }))
                this.setState({
                    dataSource: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    _addPosition = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/position/create',
            data: {
                position_name: this.state.positionName,
                team_id: this.state.teamId
            }
        })
            .then(
                res => {
                    if (res.data.message != 'This position has already create.') {
                        notification['success']({
                            message: 'Create Success',
                            description:
                                'The data added to database.',
                        });
                        this.setState({ positionName: '' })
                        this.setState({ teamId: '' })
                        this._getPosition();
                    } else {
                        notification['error']({
                            message: 'Create error',
                            description:
                                res.data.message
                        });
                    }
                })
            .catch(err => {
                this.setState({ positionName: '' })
                this.setState({ teamId: '' })
                notification['error']({
                    message: 'Create error',
                    description:
                        'The data can not add to database.',
                });
            })
    }


    _removePosition = (rowId) => {
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/position/delete',
            data: {
                position_id: rowId
            }
        })
            .then(res => {
                console.log(res);
                notification['success']({
                    message: 'Delete Success',
                    description:
                        'The data deleted from database.',
                });
                this._getPosition();
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
            url: 'http://localhost:8000/api/position/edit',
            data: {
                position_id: data.position_id,
                position_name: data.position_name,
                team_id: data.team_id,
                team_name: data.team_name

            }
        })
            .then(res => {
                if (res.data.message != 'This position has already create.') {
                    notification['success']({
                        message: 'Edit Success',
                        description:
                            'The data has been edited.',
                    });
                    this.setState({ openEdit: false })
                    this._getPosition();
                } else {
                    notification['error']({
                        message: 'Edit error',
                        description:
                            res.data.message,
                    });
                }

            })
            .catch(err => {

                notification['error']({
                    message: 'Edit error',
                    description:
                        'The data can not Edit.',
                });
            })
    }
    render() {
        const { dataSource } = this.state;
        const columns = [
            {
                title: 'Position_ID',
                dataIndex: 'position_id',
                key: 'position_id',
                width: '15%',
            },
            {
                title: 'Position_Name',
                dataIndex: 'positions_name',
                key: 'positions_name',
                width: '18%',
            },
            {
                title: 'Team_Id',
                dataIndex: 'team_id',
                key: 'team_id',
                width: '15%',
            },
            {
                title: 'Team_Name',
                dataIndex: 'team_name',
                key: 'team_name',
                width: '18%',
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
                        <Popconfirm title="Sure to delete?" onConfirm={() => this._removePosition(rowId.position_id)}>

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
                    <p>MANAGE POSITION</p>
                </div>
                {this.state.openEdit && (
                    <ModalEditPosition
                        open={this.state.openEdit}
                        close={() => this.setState({ openEdit: false })}
                        text="Position"
                        save={this.onEdit}
                        data={this.state.dataEdit}
                    />
                )}
                <div className="container-fluid">
                    <br />
                    <div className="table-form-team">

                        <span className="sub-title-edit-form-add">Position Name</span>
                        <input
                            style={{ marginRight: "15px" }}
                            value={this.state.positionName}

                            onChange={e => this.setState({ positionName: e.target.value })}

                        />
                        <span className="sub-title-edit-form-add">Team ID</span>
                        <input
                            style={{ marginRight: "15px" }}
                            value={this.state.teamId}
                            onChange={e => this.setState({ teamId: e.target.value })}

                        />

                        <button className="btn-add-new-data"
                            onClick={() => this._addPosition()}>
                            ADD POSITION
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


export default AdminEditPosition;