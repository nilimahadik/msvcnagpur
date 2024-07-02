import newsPage from "@/data/newsPage";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleNews from "../NewsTwo/SingleNews";

const NewsPage = () => {
  return (
    <section className="news-page">
      <Container>
        <Row>
          {newsPage.map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsPage;
