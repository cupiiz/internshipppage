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
function App() {
  return (
    <div className="App">
      {/* Show body in  Web site */}
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

          <Route path="/adminlogin">
          <ScrollToTop>
            <Adminlogin />
            </ScrollToTop>
          </Route>

          <Route path="/applicationreply">
          
            <Applicationreply />
            
          </Route>

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


          <Redirect from="/" to="/home" />
      </Switch>
      {/* Footer Web site */}
      
    </div>
  );
}

export default App;