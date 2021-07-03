import React from 'react';
import {Col, Row, Nav, Navbar} from 'react-bootstrap';

const NavBarD = () => {
    return (
        <>
        <Row>

       <Navbar collapseOnSelect expand="md"  variant="dark" className='nbg'  >
        <Navbar.Brand href="#home" className='navbar-brand ml-5 ' >Portfolio</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ml-auto mr-5">
              <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#about">About</Nav.Link>
               <Nav.Link href="#contact">Contact </Nav.Link>
               <Nav.Link href="#p-viw">Projects</Nav.Link>
               
             </Nav>
             
              </Navbar.Collapse>
                 </Navbar>
                
                     </Row>
        </>
    )
}

export default NavBarD;
