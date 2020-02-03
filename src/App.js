import React from 'react';
import './App.css';
import Form from './Form/Form';
import Navbar from './components/Navigation/Navbar';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Application from './components/Application/Application';
function App() {
  return (
    <div className="App">

      {/* Navigation Web site */}
      <Navbar />

      {/* Show body in  Web site */}
      <Switch>
          <Route path="/home">
            <Form />
          </Route>
          <Route path="/join">
            <Application />
          </Route>
          <Redirect from="/" to="/home" />
      </Switch>

      {/* Footer Web site */}
    </div>
  );
}

export default App;