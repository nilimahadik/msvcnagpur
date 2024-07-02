import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleGallery = ({ gallery = {} }) => {
  const { image, title, category } = gallery;
  return (
    <Col xl={4} lg={6} md={6}>
      <div className="gallery-page__single">
        <div className="gallery-page__img-box">
          <Image
            src={require(`@/images/gallery/${image}`).default.src}
            alt=""
          />
          <div className="gallery-page__hover-content-box">
            <h2>{title}</h2>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleGallery;
