import aboutProgress from "@/data/aboutProgress";
import image from "@/images/resources/about-page-img-1.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={image.src} alt="" />
                <div className="about-page__trusted">
                  <h3>
                    We’re trusted by <span>9,8750</span> donors
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Inroductions</span>
                <h2 className="section-title__title">
                  We believe that we can save more lifes
                </h2>
              </div>
              <p className="about-page__right-text">
                We are trusted by our clients and have a reputation for the best
                services in the field. Lorem ipsum is simply free text dolor sit
                amett consectetur adipiscing elit. It is a long established fact
                that a reader will be distracted by the readable content of a
                page.
              </p>
              <h3 className="about-page__right-title">
                Halpes is the largest global crowdfunding community in the world
              </h3>
              <div className="about-five__progress-wrap">
                {aboutProgress.map((progress) => (
                  <AboutProgressbar key={progress.id} progress={progress} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
