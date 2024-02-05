import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Inhwa Son </span>
            from <span className="purple"> Busan, South Korea.</span>
            <br />
            I am currently a graduate student studying computer science.
            <br />
            These are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Skiing and swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangout with people
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
