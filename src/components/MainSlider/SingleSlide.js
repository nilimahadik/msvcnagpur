import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { image, bg, subTitle, title, href } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer "
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="image-layer-overlay"></div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="main-slider__content">
              {/* <p>{subTitle}</p> */}
              <h2>
                {title} <br />
           
            Veternary Council
              </h2>
              <a href={href} className="thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Read More
              </a>
              {/* <div className="main-slider__shape-1 zoom-fade">
                <Image src={image.src} alt="" />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
