import teamOne from "@/data/teamOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleTeamOne from "./SingleTeamOne";

const TeamOne = ({ className = "" }) => {
  return (
    <section className={`team-one ${className}`}>
      <Container>
        {!className && (
          <div className="section-title text-center">
            <span className="section-title__tagline">
          President Desk and Registrar Desk
            </span>
            <h2 className="section-title__title">
              Meet the best team  
              
            </h2>
          </div>
        )}
        <Row>
          {teamOne.slice(0, className ? undefined : 3).map((team) => (
            <SingleTeamOne key={team.id} team={team} />
          ))}
        </Row>
        
      </Container>
    </section>
  );
};

export default TeamOne;
