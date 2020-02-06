import React from 'react';
import { Container, Col, Row, Form, Button, } from 'react-bootstrap';
import './Adminmainpage.css';
import Adminsidebar from './Adminsidebar';
const adminmainpage = (props) => {
    return(

<div className="viewport">
  <Adminsidebar/>

  <div className="content">
    <h1>Admin Page</h1>
    </div>
    <div className="container-fluid">
  </div>
</div>

    )
};
    

export default adminmainpage;