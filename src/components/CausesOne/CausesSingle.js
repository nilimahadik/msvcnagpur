import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const CausesSingle = ({ cause = {}, causePage }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { image, category, title, description, raised, goal } = cause;
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100);

  return (
    <div className={causePage ? "" : "my-4"}>
      <div
        style={causePage ? {} : { userSelect: "none" }}
        className="causes-one__single animated fadeInLeft"
      >
        <div className="causes-one__img">
          <div className="causes-one__img-box">
            <Image
              src={require(`@/images/resources/${image}`).default.src}
              alt=""
            />
            <Link href="/causes-details" legacyBehavior>
              <a>
                <i className="fa fa-plus"></i>
              </a>
            </Link>
          </div>
          <div className="causes-one__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-one__content">
          <h3 className="causes-one__title">
            <Link href="/causes-details" legacyBehavior>{title}</Link>
          </h3>
          <p className="causes-one__text">{description}</p>
        </div>
        <div className="causes-one__progress">
          <ReactVisibilitySensor
            offset={{ top: 10 }}
            delayedCall={true}
            onChange={onVisibilityChange}
          >
            <div className="bar">
              <div
                className="bar-inner count-bar"
                data-percent={`${countStart ? percent : 0}%`}
                style={{ width: `${countStart ? percent : 0}%`, opacity: 1 }}
              >
                <div className="count-text" style={{ opacity: 1 }}>
                  {countStart ? percent : 0}%
                </div>
              </div>
            </div>
          </ReactVisibilitySensor>
          <div className="causes-one__goals">
            <p>
              <span>${raised}</span> Raised
            </p>
            <p>
              <span>${goal}</span> Goal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CausesSingle;
