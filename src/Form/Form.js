import React from 'react';
import Aux from '../components/hoc/Aux';
import Navbar from '../components/Navigation/Navbar';
import Mainpage from '../components/Mainpage/Mainpage';
const form =(props)=>(
    <Aux>
    <Navbar/>
    <img src="../../../bg.png" width="100%" height="650px" background-position="center" background-repeat="no-repeat"
  background-size="cover" position ="relative" />
    <Mainpage/>
      
    
    <main>
        {props.children}
    </main>
    </Aux>
);
export default form;