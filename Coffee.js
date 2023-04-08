import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react'
import { ShoppingCart } from '@mui/icons-material';

function Coffee() {
  return (
    <div>
        <h1 style={{color:"#8B0000",fontFamily:"cursive"}}>Cafe day</h1>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.starbucks.in/dashboard">Coffee</Nav.Link>
            <Nav.Link href="https://in.teabox.com/">Tea</Nav.Link>
            <Nav.Link href="https://cakebee.in/">Pastries</Nav.Link>
          </Nav>
          <ShoppingCart/>
        </Container>
      </Navbar>
      <img src="https://static.toiimg.com/photo/89078867.cms" alt=" "></img>
    </div>
  )
}

export default Coffee

