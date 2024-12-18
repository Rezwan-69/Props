
import React from 'react'
import "./banner.css"
import { Container,Row,Col } from 'react-bootstrap'
import ban from "../../assets/ban.png"



const Banner = () => {
  return (
   <>
   <section id='banner'>
    <Container>
      <Row>
        <Col lg={4}>
        <h1>Building stellar websites for early startups</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <a href=''>View our work</a>
       
        </Col>
        <Col lg={{span:1, offset:2}}>
        <img src={ban} alt="" />
        </Col>
      </Row>
    </Container>

   </section>
   </>
  )
}

export default Banner