import React from "react";
import { Image } from "react-bootstrap";

const TestimonialSingle = ({ singleTestimonial }) => {
  const { name, description, category, image } = singleTestimonial;

  return (
    <div>
      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <p className="testimonial-one__text">{description}</p>
        <div className="testimonial-one__client-info">
          <div className="testimonial-one__client-img">
            <Image
              alt=""
              src={require(`@/images/testimonial/${image}`).default.src}
            />
            <div className="testimonial-one__quote"></div>
          </div>
          <div className="testimonial-one__client-name">
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSingle;
