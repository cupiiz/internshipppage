import React from 'react';
import './App.css';
import Form from './Form/Form';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Application from './components/Application/Application';
import Applicationreply from './components/Application/Applicationreply';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import Termsofuse from './components/Footer/Termsofuse';
import ScrollToTop from 'react-router-scroll-top';
import Adminlogin from './components/Adminpage/Adminlogin';
import Adminmainpage from './components/Adminpage/Adminmainpage';
import Trwdatatable from './components/Adminpage/Trwdatatable';
import Showdatapage from './components/Adminpage/Showdatapage';
import axios from 'axios';

class App extends React.Component {


  constructor() {
    super()
    this.state = {
      isAuth: localStorage.getItem("token") !== null ? true : false,
      token: localStorage.getItem("token") || '',
      userId: localStorage.getItem("userId") || ''
    }
  }


  onLogin = (params) => {
    const param = {
      admin_username: params.username,
      admin_password: params.password
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/admin/login',
      data: param
    })
      .then(result => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userId", JSON.stringify(result.data.userId));

        this.setState({
          isAuth: true,
          token: result.data.token,
          userId: result.data.userId
        })

        window.location.href = '/adminmainpage'
      })
      .catch(err => {
        if (err.response.status === 400) {
          alert('username or password wrong!!')
        } else {
          alert('server error!!')
        }
      })
  }

  render() {
    let route = (
      <Switch>
        <Route path="/home">
          <ScrollToTop>
            <Form />
          </ScrollToTop>
        </Route>

        <Route path="/application">
          <ScrollToTop>
            <Application />
          </ScrollToTop>
        </Route>

        <Route path="/privacypolicy">
          <ScrollToTop>
            <PrivacyPolicy />
          </ScrollToTop>
        </Route>

        <Route path="/termsofuse">
          <ScrollToTop>
            <Termsofuse />
          </ScrollToTop>
        </Route>

        <Route path="/adminlogin" render={() => (
          <ScrollToTop>
            <Adminlogin
              onLogin={this.onLogin}
            />
          </ScrollToTop>
        )} />

        <Route path="/applicationreply">
          <Applicationreply />
        </Route>

        <Redirect from="/" to="/home" />
      </Switch>
    )
    if (this.state.isAuth) {
      route = (
        <Switch>
          <Route path="/adminmainpage">
            <ScrollToTop>
              <Adminmainpage />
            </ScrollToTop>
          </Route>

          <Route path="/trwdatatable">
            <ScrollToTop>
              <Trwdatatable />
            </ScrollToTop>
          </Route>

          <Route path="/showdatapage">
            <ScrollToTop>
              <Showdatapage />
            </ScrollToTop>
          </Route>
          <Redirect from="/" to="/adminmainpage" />
        </Switch>
      )
    }
    return (
      <div className="App">
       
        {route}
       

      </div>
    );
  }
}
export default App;