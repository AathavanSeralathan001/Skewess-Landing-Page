import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import backToTop from '../assets/back_to_top.jpg';
// import '../assets/scrollButton.css';
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
    
     {/* <ExpandLessRoundedIcon  onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} /> */}
    <img src={backToTop}  onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='scroll-btn' alt="" srcset="" />
     {/* <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} /> */}
    </Button>
  );
}
  
export default ScrollButton;