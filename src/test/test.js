import React, { Component } from 'react'
import Axios from 'axios';

export default class test extends Component {
    constructor(){
        super();
        this.state = {
            formPDF: null,
            pathPDF: ''
        }
    }
    onUpload = (event) => {
        const file = event.target.files[0];
        this.setState({
            formPDF: file
        }) 
    }

    onSubmitPDF = () => {
        const bodyFormData = new FormData();
        bodyFormData.append('PDF', this.state.formPDF); 
        Axios({
            method: 'post',
            url: 'http://localhost:8000/upload',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then( res => {
                const pathPDF = res.data;
                this.setState({
                    pathPDF: pathPDF.data
                })
            })
            .catch( err => console.log(err))
    }

    render() {
        console.log( 'fiel now ====>', this.state.formPDF );
        console.log( 'name now ====>', this.state.pathPDF );
        
        return (
            <div style={{ backgroundColor: '#FFF', minHeight: '100vh' }}>
                <h1>Upload file</h1>
                <br />

                <input type="file" style={{
                    backgroundColor: this.state.pathPDF ? 'green' : 'red'
                }} name="upload" accept="application/pdf" onChange={this.onUpload}/>
                <button onClick={this.onSubmit}>Sent</button>
            </div>
        )
    }
}
