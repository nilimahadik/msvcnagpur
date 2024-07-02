import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesDetailsLeft from "./CausesDetailsLeft";
import CausesDetailsRight from "./CausesDetailsRight";

const CausesDetailsPage = () => {
  return (
    <section className="causes-details">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <CausesDetailsLeft />
          </Col>
          <Col xl={4} lg={5}>
            <CausesDetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesDetailsPage;
