import React from 'react'
import "./header.css"
import { Container,Nav,Navbar } from 'react-bootstrap'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link"><a href="" className='navbtn'>Contacd Us</a></Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        

  )
}

export default Header