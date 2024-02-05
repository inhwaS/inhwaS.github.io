import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import deardiary from "../../Assets/Projects/deardiary.png";
import flextra from "../../Assets/Projects/flextra.png";
import audiosensai from "../../Assets/Projects/audiosensai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deardiary}
              isBlog={false}
              title="Dear Diary"
              description="This web application is specifically designed for couples, providing them with a private platform to maintain a shared diary. By using Google APIs, users can log in with Google authentication, and automated emails are sent to commemorate their 100th day or 1st-year anniversaries."
              ghLink="https://github.com/inhwaS/dear-diary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audiosensai}
              isBlog={false}
              title="AudioSensAI"
              description="Our team created an audio analyzer that utilizes AI to generate a relevant video with voiceover and subtitles. Our aim was to enhance education for individuals with visual impairments and to turn boring audio recordings into interesting videos."
              ghLink="https://github.com/inhwaS/shiba"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flextra}
              isBlog={false}
              title="Flextra"
              description="“Connect students to extra Community Garden produce.” Our problem is food waste and scarcity. Our solution is a platform that shows students the extra produce in a platform. This will be executed by making a website/app and finding a student employee."
              ghLink="https://docs.google.com/presentation/d/15BpmXhfg6psVKQ07C1ZyrBUupc458zQaa6yVfFSgPGQ/edit#slide=id.p"
              demoLink="https://previewer.adalo.com/29c3330b-3ee6-45fe-963c-4437936ae952"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
