import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { title, image, href, comments, date } = news;

  return (
    <div className="news-one__right-single">
      <div className="news-one__right-img">
        <Image src={image.src} alt="" />
        <Link href={href} legacyBehavior>
          <a>
            <i className="fa fa-plus"></i>
          </a>
        </Link>
      </div>
      <div className="news-one__right-content">
        <ul className="list-unstyled news-one__right-meta">
          <li>{date}</li>
          <li>
            <span>/</span>
          </li>
          <li>
            <a href="#">{comments} Comments</a>
          </li>
        </ul>
        <h3 className="news-one__right-title">
          <Link href={href} legacyBehavior>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleNews;
