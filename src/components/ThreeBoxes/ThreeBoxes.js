import threeBoxes from "@/data/threeBoxes";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBox from "./SingleBox";

const ThreeBoxes = () => {
  return (
    <section className="three-boxes">
      <div className="container-box">
        <Row>
          {threeBoxes.map((singleBox) => (
            <SingleBox key={singleBox.id} singleBox={singleBox} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ThreeBoxes;
