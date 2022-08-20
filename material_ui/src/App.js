import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import {Button} from '@mui/material';
import NavbarComponent from './components/NavbarComponent';
import BannerComponent from './components/BannerComponent';
import WhoWeComponent from './components/WhoWeComponent';
import AboutContact from './components/AboutContact';
import styled,{ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './themes.jsx';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Fragment } from 'react';
import ScrollButton from './components/scrollButton';
import { Content, Heading } from './components/Styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from './components/ControlledCarousel';
import ContactForm from './components/ContactForm';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const StyledApp = styled.div `
color: ${props => props.theme.fontColor}`;
function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

useEffect(()=>{
  Aos.init({duration: 2700});

},[]);

  return (

    <div className="App">
    <ThemeProvider theme={theme === 'light' ? lightTheme:darkTheme}>
    <StyledApp>
    <GlobalStyles/>
    <div className="App">
      <NavbarComponent/>
      <br/><br/><br/><br/><br/><br/>
      <BannerComponent/>
      <div className="themetoggle">
      <Button onClick={()=>themeToggler()} variant="outlined" startIcon={< Brightness4Icon/>}>
        Change Theme
      </Button>
      </div>
      <Fragment>
     
      <Content />
      <ScrollButton />
    </Fragment>

      <WhoWeComponent />
    
<ControlledCarousel/>
<br/> <br/>
<ContactForm/>
      <AboutContact/>
    </div>
    </StyledApp>
    </ThemeProvider>
    </div>
  );
}

export default App;



