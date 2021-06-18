

import React from 'react'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';
import NavBarD from './Component/NavBar';
import Project from './Component/Project';
import {Container} from 'react-bootstrap';
const App = () => {
  return (
    <>
    <Container fluid>
    <NavBarD/>
    <Header/>
    <Content data-aos="fade-in"/>
    <Project/>
    <Footer/>
    </Container>
    </>
  )
}

export default App
