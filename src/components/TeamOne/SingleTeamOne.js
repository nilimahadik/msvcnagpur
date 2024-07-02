import { social } from "@/data/NavItems";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTeamOne = ({ team = {} }) => {
  const { image, name, title, description } = team;

  return (
    
    <Col xl={4} lg={4} >
      <div className="team-one__single">
        <div className="team-one__img-box">
          <div className="team-one__img">
            <Image src={require(`@/images/team/${image}`).default.src} alt="" />
          </div>
          {/* <div className="team-one__member-name">
            <h2>{name}</h2>
          </div> */}
        </div>
        <div className="team-one__content">
          <h4 className="team-one__member-title">{title}</h4>
          <p className="team-one__text-box">{description}</p>
        </div>
        {/* <div className="team-one__social">
          {social.map(({ icon, link }, index) => (
            <a href={link} key={index}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div> */}
      </div>
    </Col>
  );
};

export default SingleTeamOne;
