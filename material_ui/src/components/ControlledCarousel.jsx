import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import mitok from '../assets/mitok.png';
import signlock from '../assets/sign_lock3.png';
import ske from '../assets/ske.png';
import '../styles/slider.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import '../styles/carousel.css';


const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const signLock = `
Sign lock - Simple technique to protect your signature from getting misused.
`;
const Ske = `
SKE - Method of identifying counterfeit products
`;
const Mitok = `
Mitok - Hassle-free Token system for Hospitals, Spa and Saloon.
`;


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <center>
    <div class="products" id="products">PRODUCTS</div>
    <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
      <div className='mitok'>
        <img
          className="d-block w-100"
          src={mitok}
          alt="First slide"
        />
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={signlock}
          alt="Second slide" 
        />
{/* 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ske}
          alt="Third slide"
        />


        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
    <Tooltip title={signLock}>
        <Button sx={{ m: 1 }}><Typography className='carouselBottom'>SIGN LOCK</Typography></Button>
      </Tooltip>
      <Tooltip title={Ske}>
        <Button sx={{ m: 1 }}><Typography className='carouselBottom'>SKE</Typography></Button>
      </Tooltip>
      <Tooltip title={Mitok}>
        <Button sx={{ m: 1 }}><Typography className='carouselBottom'>MITOK</Typography></Button>
      </Tooltip>
     

    </center>
  );
}
