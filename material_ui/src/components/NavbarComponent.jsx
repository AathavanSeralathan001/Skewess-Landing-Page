

import logo from '../assets/sample_logo.png'
import '../styles/navbar.css'
import {Link} from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
function CollapsibleExample() {

// Change Navbar color on Scrolling
const [color,setColor] = useState(false)
const changeColor = ()=>{
  if (window.scrollY >=100){
    setColor(true)
  } 
  else{
    setColor(false)
  }
}

window.addEventListener('scroll', changeColor)

  return (
    <div >


    <Navbar  sticky="top" className={color ? 'navbar navbar-bg' : 'navbar'} collapseOnSelect expand="lg"  variant="dark">
      <Container>
     
        <Navbar.Brand href="#banner">  <a href="#">
          <img src={logo} style={{width:100, marginTop: -7}} />
          </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className='right' >
          <Link to="who-we" className = "nav-item" spy={true} smooth={true} offset={-100} duration={100} >SKEWESS</Link>
          <Link to="services" spy={true} className = "nav-item" smooth={true} offset={-100} duration={100} >SERVICES</Link>
         
            <Link to="products" spy={true} className = "nav-item" smooth={true} offset={-100} duration={100} >PRODUCTS</Link>
          
            <Link to="contactUs" className = "nav-item" spy={true} smooth={true} offset={-100} duration={100} >CONTACT</Link>
            <Link to="about-contact" className = "nav-item" spy={true} smooth={true} offset={-100} duration={100} >ABOUT</Link>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}

export default CollapsibleExample;