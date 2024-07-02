import testimonial from "@/data/testimonial";
import bg from "@/images/backgrounds/testimonial-1-bg.jpg";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialSingle from "./TestimonialSingle";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  gutter: 0,
  controlsContainer: "#testimonial-one-carousel-nav",
  responsive: {
    768: {
      items: 2,
      gutter: 30,
    },
  },
};

const TestimonialOne = ({ className = "" }) => {
  return (
    <section className={`testimonial-one ${className}`}>
      <div
        className="testimonial-one-bg"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <Container>
        <Row>
          <Col xl={4}>
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Testimonials</span>
                <h2 className="section-title__title">
                  What they’re talking about charity
                </h2>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div className="testimonial-one__right testimonial-one__carousel owl-theme owl-carouse position-relative">
              <TinySlider settings={settings}>
                {testimonial.map((singleTestimonial) => (
                  <TestimonialSingle
                    singleTestimonial={singleTestimonial}
                    key={singleTestimonial.id}
                  />
                ))}
              </TinySlider>
              <div id="testimonial-one-carousel-nav" className="owl-nav">
                <button className="owl-prev me-2">
                  <span className="icon-right-arrow left"></span>
                </button>
                <button className="owl-next">
                  <span className="icon-right-arrow"></span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
