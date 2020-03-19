import React from 'react';
import Mainpage from '../components/Mainpage/Mainpage';
import Image from 'react-bootstrap/Image'
import banner from '../assets/img/bg.png';
import  Footer  from '../components/Footer/Footer';
import Navbar from '../components/Navigation/Navbar';

import CardFlip from '../components/Mainpage/Cardflip';
import Joinus from "../components/Mainpage/Joinus";
const form = (props) => {
  return(
   

 <div style={{backgroundColor:"#0d0d0d"}}>
   <Navbar />
    
      <Image src={banner} width="100% " fluid id="home"/> 
      
    <Mainpage />
    
    

        <CardFlip />
    

 
        <Joinus/>
    
    <Footer/>
    </div>
  
    )  
    
  };
  
export default form;