import React from "react";
import { Col } from "react-bootstrap";

const Workreuseable = ({ title, pera, img }) => {
  return (
    <>
      <Col lg={6}>
        <div className="">
          <img src={img} alt="" />
          <h5>{title}</h5>
          <p>{pera}</p>
        </div>
      </Col>
    </>
  );
};

export default Workreuseable;
