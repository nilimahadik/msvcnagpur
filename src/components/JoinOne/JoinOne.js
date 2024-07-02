import bg from "@/images/backgrounds/join-one-bg.jpg";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const JoinOne = ({ className = "" }) => {
  return (
    <section className={`join-one ${className}`}>
      <Jarallax className="join-one-bg" speed={0.2} imgPosition="50% 0%">
        <JarallaxImage src={bg.src} />
      </Jarallax>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="join-one__inner">
              <h2 className="join-one__title">
              Veterinary Doctors<br />
                section
              </h2>
              {/* <a href="#" className="join-one__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Learn More
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinOne;
