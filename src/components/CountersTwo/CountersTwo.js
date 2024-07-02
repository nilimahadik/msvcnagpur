import countersTwo from "@/data/countersTwo";
import bg from "@/images/backgrounds/counters-two-bg.jpg";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const CountersTwo = () => {
  return (
    <section className="counters-two">
      <Jarallax className="counters-two-bg" speed={0.2} imgPosition="50% 0%">
        <JarallaxImage src={bg.src} />
      </Jarallax>
      <Container>
        <Row>
          <Col xl={5} lg={5}>
            <div className="counters-two__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Get Daily Updates
                </span>
                <h2 className="section-title__title">
                  Check what make us different than others
                </h2>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={7}>
            <div className="counters-two__right">
              <ul className="counters-two__four-boxes list-unstyled">
                {countersTwo.map(({ id, icon, title }) => (
                  <li key={id}>
                    <div className="counters-two__four-boxes-icon">
                      <span className={icon}></span>
                    </div>
                    <h4>
                      {title.split(" ").map((t, i) => (
                        <span key={i} className="d-block">
                          {t}
                        </span>
                      ))}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CountersTwo;
