import React from 'react';
import Aux from '../components/hoc/Auxx';
import Mainpage from '../components/Mainpage/Mainpage';
import Image from 'react-bootstrap/Image'
import banner from '../assets/img/bg.png';
import  Footer  from '../components/Footer/Footer';
import Navbar from '../components/Navigation/Navbar';
const form = (props) => {
  return(

 <div>
   
    <Navbar />
      <Image src={banner} width="100% " fluid id="home"/> 
      
    <Mainpage />
    <Footer/>
    
    </div>
    )  

  };
export default form;