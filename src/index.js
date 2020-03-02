import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { StoreContextProvider } from './components/Application/store'
ReactDOM.render(
    
    <BrowserRouter>
    <StoreContextProvider>
        <App />
        </StoreContextProvider>
    </BrowserRouter>
    
, document.getElementById('root'));

serviceWorker.unregister();