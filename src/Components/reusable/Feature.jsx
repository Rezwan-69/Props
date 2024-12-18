import React from 'react'
import { Col } from 'react-bootstrap'

const Feature = ({img,title,list}) => {
  return (
    <Col lg={4}>
    <div className="box">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{list}</p>
    </div>
    </Col>
  )
}

export default Feature