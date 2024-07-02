import React from "react";
import { Container, Row } from "react-bootstrap";
import CharityContent from "./CharityContent";
import CharityImage from "./CharityImage";
import { useTranslation } from 'next-i18next';

const Charity = ({ locale }) => {
  const { t } = useTranslation('common');
  
  return (
    <section className="welcome-one">
      <Container>
        <Row>
          <CharityImage locale={locale} />
          <CharityContent locale={locale} />
        </Row>
      </Container>
    </section>
  );
};

export default Charity;

