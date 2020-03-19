import React from 'react';

import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faEye,faTrash } from '@fortawesome/free-solid-svg-icons';


const trwdatatable = (props) => {
    return (

        <div className="viewport">
            <Adminsidebar />

            <div className="content">
                <p>The Runway Agency</p>
            </div>
            <div className="container-fluid">

            <table className="table table-striped main-table">
                    <thead className="main-table-scope" >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Team</th>
                            <th scope="col">Position</th>
                            <th scope="col">Apply Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody >
                        
                        <tr className="main-table-data-2">
                            <th scope="row">1</th>
                            <td>sssss</td>
                            <td>sssss</td>
                            <td>sssss</td>
                            <td>sssss</td>
                            <td>sssss</td>
                            
                            <td>
                                
                                <button
                                className="btn btn-success btn-sm"
                                    
                                style={{marginRight: '5px'}}>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                            

                            <button
                                className="btn btn-warning btn-sm"
                               
                                style={{marginRight: '5px'}}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                
                                style={{marginRight: '5px'}}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </td>
                        </tr>
                       
                        </tbody>
                        </table>
  </div>
</div>

                )
            };
                
            
export default trwdatatable;