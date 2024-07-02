import { newsDetailsPage } from "@/data/newsDetails";
import React from "react";
import { Image } from "react-bootstrap";

const { postList, tags, categories } = newsDetailsPage;

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.placeholder();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form onSubmit={handleSubmit} className="sidebar__search-form">
          <input name="search" type="search" placeholder="Search" />
          <button type="submit">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
        <ul className="sidebar__post-list list-unstyled">
          {postList.map(({ id, title, image, admin }) => (
            <li key={id}>
              <div className="sidebar__post-image">
                <Image
                  src={require(`@/images/blog/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <a href="#" className="sidebar__post-content_meta">
                    <i className="far fa-user-circle"></i>by {admin}
                  </a>
                  <a href="news-details.html">{title}</a>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list list-unstyled">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">
                <i className="fas fa-arrow-circle-right"></i>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Popular Tags</h3>
        <div className="sidebar__tags-list">
          {tags.map((tag, index) => (
            <a key={index} href="#">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
