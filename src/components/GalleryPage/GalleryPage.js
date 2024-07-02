import galleryPageData from "@/data/galleryPageData";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleGallery from "./SingleGallery";

const GalleryPage = () => {
  return (
    <section className="gallery-page">
      <Container>
        <Row>
          {galleryPageData.map((gallery) => (
            <SingleGallery key={gallery.id} gallery={gallery} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
