import React from 'react';
import Aux from '../components/hoc/Auxx';
import Mainpage from '../components/Mainpage/Mainpage';
import Image from 'react-bootstrap/Image'
import banner from '../assets/img/bg.png';
const form = (props) => (
  <Aux>
    <div >
      <Image src={banner} width="100%" fluid/> 
      </div>
    <Mainpage />
  </Aux>
);
export default form;