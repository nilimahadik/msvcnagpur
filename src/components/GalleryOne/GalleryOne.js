import galleryData from "@/data/galleryData";
import dynamic from "next/dynamic";
import React from "react";
import { Image } from "react-bootstrap";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 15,
    },
    992: {
      items: 3,
      gutter: 15,
    },
    1200: {
      items: 5,
      gutter: 20,
    },
  },
};

const GalleryOne = ({ className = "" }) => {
  return (
    <section className={`gallery-one ${className}`}>
   <div className="section-title text-center">
            
            <h2 className="section-title__title">
             Gallery
              
            </h2>
          </div>
      <div className="gallery-one__container-box clearfix">
        <TinySlider settings={settings} className="gallery-one__carousel">
          {galleryData.map(({ id, image, title, subTitle }) => (
            <div key={id}>
              <div
                style={{ userSelect: "none" }}
                className="gallery-one__single"
              >
                <div className="gallery-one__img-box">
                  <Image
                    src={require(`@/images/gallery/${image}`).default.src}
                    alt=""
                  />
                  {/* <div className="gallery-one__hover-content-box">
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </section>
  );
};

export default GalleryOne;
