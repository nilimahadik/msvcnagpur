import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const countBar = [
  {
    id: 1,
    title: "Charity",
    percent: 83,
  },
  {
    id: 2,
    title: "Donations",
    percent: 38,
  },
];

const CharityContent = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__right">
        <div className="section-title text-left">
          {/* <span className="section-title__tagline">Welcome to Charity</span> */}
          <h2 className="section-title__title">
           Welcome to Maharashtra State Veternary Council
          </h2>
        </div>
        <p className="welcome-one__right-text">
        Indian Veterinary Council Act,1984(52 of 1984) was enacted in the year 1984 and was published in the Extraordinary Gazette of India dated 21st August,1984 to regulate veterinary practice and to provide for that purpose, for the establishment of Veterinary Council of India and State Veterinary Councils and the maintenance of Registers of Veterinary practitioners and for the matters connected therewith.
        </p>
        <div className="welcome-one__our-mission-and-story">
          <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Mission
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
            Our mission is to enrol individuals with recognized veterinary qualifications and to maintain the State Veterinary Practitioner Register. 
            {/* We are committed to regulating veterinary practice in the State as per the Indian Veterinary Council Act 1984, ensuring adherence to the highest standards of veterinary education and practice. */}
            </p>
          </div>
          {/* <div className="welcome-one__mission-and-story-single">
            <h3>
              <i className="fas fa-arrow-circle-right"></i>Our Story
            </h3>
            <p className="welcome-one__our-mission-and-story-text">
              Lorem ipsum dolor sit amet not is consectetur notted.
            </p>
          </div> */}
        </div>
        <div className="welcome-one__progress">
          {countBar.map(({ id, title, percent }) => (
            <div className="welcome-one__progress-single" key={id}>
              {/* <h4 className="welcome-one__progress-title">{title}</h4> */}
              {/* <ReactVisibilitySensor
                offset={{ top: 10 }}
                delayedCall={true}
                onChange={onVisibilityChange}
              >
                <div className="bar">
                  <div
                    className="bar-inner count-bar"
                    data-percent={`${countStart ? percent : 0}%`}
                    style={{
                      width: `${countStart ? percent : 0}%`,
                      opacity: 1,
                    }}
                  >
                    <div
                      className="count-text"
                      style={{ opacity: countStart ? 1 : 0 }}
                    >
                      {countStart ? percent : 0}%
                    </div>
                  </div>
                </div>
              </ReactVisibilitySensor> */}
            </div>
          ))}
        </div>
        <a href="#" className="welcome-one__btn thm-btn">
          <i className="fas fa-arrow-circle-right"></i>Read More
        </a>
      </div>
    </Col>
  );
};

export default CharityContent;
