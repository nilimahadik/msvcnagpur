import counter from "@/data/counter";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counters = ({ className = "" }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className={`counters-one ${className}`}>
      <Container>
        <ul className="counters-one__box list-unstyled">
          {counter.map(({ id, count, letter, text }) => (
            <li className="counter-one__single" key={id}>
              <h3 className="odometer d-flex align-items-center justify-content-center">
                <ReactVisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <CountUp
                    start={0}
                    end={countStart ? count : 0}
                    duration={2}
                  />
                </ReactVisibilitySensor>
                {letter && (
                  <span className="counter-one__letter">{letter}</span>
                )}
              </h3>

              <p className="counter-one__text">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Counters;
