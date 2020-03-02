import React from 'react';
import Mainpage from '../components/Mainpage/Mainpage';
import Image from 'react-bootstrap/Image'
import banner from '../assets/img/bg.png';
import  Footer  from '../components/Footer/Footer';
import Navbar from '../components/Navigation/Navbar';
const form = (props) => {
  return(
   

 <div style={{backgroundColor:"#171717"}}>
   <Navbar />
    
      <Image src={banner} width="100% " fluid id="home"/> 
      
    <Mainpage />
    <Footer/>
    
    </div>
  
    )  
    
  };
  
export default form;