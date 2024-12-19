import React from "react";
import "./pops.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import Workreuseable from "../reusable/Workreuseable";
import num1 from "../../assets/num.png";
import num2 from "../../assets/2.png";
import num3 from "../../assets/3.png";
import num4 from "../../assets/4.png";
import Feature from "../reusable/Feature";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";

const Pops = () => {
  return (
    <>
      <section id="pops">
        <Container>
          <Row>
            <Col lg={4}>
              <h3>How we work</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="">
                Get in touch with us <FaLongArrowAltRight />
              </a>
            </Col>
            <Col lg={{ offset: 1, span: 6 }}>
              <Row>
                <Workreuseable
                  title="Strategy"
                  pera="Euismod faucibus turpis eu gravida mi"
                  img={num1}
                />
                <Workreuseable
                  title="Wireframing"
                  pera="hello World"
                  img={num2}
                />
                <Workreuseable
                  title="Design"
                  pera="NO Money ,NO Honey"
                  img={num3}
                />
                <Workreuseable
                  title="Development"
                  pera="Sugar daddy"
                  img={num4}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="feature">
        <Container>
          <Row className="text-center frow1">
            <h6>Features</h6>
            <h2>Design that solves problems, one product at a time</h2>
          </Row>

          <Row>
            <Feature
              img={i1}
              title="Uses Client First"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />

            <Feature
              img={i2}
              title="Two Free Revision Round"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />

            <Feature
              img={i3}
              title="Template Customization"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />

            <Feature
              img={i4}
              title="24/7 Support"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />

            <Feature
              img={i5}
              title="Quick Delivery"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />

            <Feature
              img={i6}
              title="Hands-on approach"
              list="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pops;
