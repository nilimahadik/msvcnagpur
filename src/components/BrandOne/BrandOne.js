import brandOne from "@/data/brandOne";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  responsive: {
    576: {
      items: 2,
      gutter: 10,
    },
    768: {
      items: 3,
      gutter: 15,
    },
    992: {
      items: 4,
      gutter: 15,
    },
    1200: {
      items: 5,
      gutter: 20,
    },
  },
};

const BrandOne = ({ brandClass = "" }) => {
  return (
    <section className={`brand-one ${brandClass}`}>
      <Container>
        <Row>
          <Col xl={12}>
            <TinySlider settings={settings} className="brand-one__carousel">
              {brandOne.map((image, index) => (
                <div key={index}>
                  <div
                    style={{ userSelect: "none" }}
                    className="brand-one__single"
                  >
                    <div className="brand-one__img">
                      <Image
                        src={require(`@/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;
