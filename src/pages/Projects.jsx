import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import s1 from "../assets/projects/s1.png";
import S2 from "../assets/projects/S2.png";
import S3 from "../assets/projects/S3.png";
import SW1 from "../assets/projects/SW1.png";
import SW2 from "../assets/projects/SW2.png";
import SW3 from "../assets/projects/SW3.png";
import SW4 from "../assets/projects/SW4.png";
import wtb1 from "../assets/projects/wtb1.png";
import wtb2 from "../assets/projects/wtb2.png";
import wtb3 from "../assets/projects/wtb3.png";
import wtb4 from "../assets/projects/wtb4.png";
import wtb5 from "../assets/projects/wtb5.png";
import wtb6 from "../assets/projects/wtb6.png";
import h1 from "../assets/projects/h1.png";
import h2 from "../assets/projects/h2.png";
import h3 from "../assets/projects/h3.png";
import h4 from "../assets/projects/h4.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s1}
              isBlog={false}
              title="Skyward Battle"
              description="Skyward Battle is an action-packed 3D game featuring advanced character rigging and animation for fluid, lifelike combat movements. Engage in relentless battles in an endless mode, where you face waves of increasingly challenging enemies.

Navigate through procedurally generated terrains, ensuring no two battles are the same. The dynamic skybox adds to the immersive experience, with stunning changes in time of day and weather conditions that enhance the intensity of the action.

In Skyward Battle, focus on honing your combat skills as you fight to survive against relentless foes. With its cutting-edge graphics, realistic animations, and ever-changing environments, this game offers an exhilarating and visually stunning experience that will keep you on the edge of your sea"
             // ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={S2}
              isBlog={false}
              title="Vertex Strike"
              description="Vertex Strike is a cutting-edge 3D third-person shooter designed for mobile, offering intuitive controls and stunning animations. Master fluid combat mechanics with advanced character rigging, delivering smooth, realistic movements in every encounter. Traverse detailed 3D terrains that provide dynamic and challenging battlefields.
              With procedurally generated terrains, each mission presents unique challenges and tactical opportunities. The high-quality graphics and dynamic environments, combined with a seamless control system, make Vertex Strike a must-play for action enthusiasts seeking an exhilarating mobile gaming experience"
             // ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={S3}
              isBlog={false}
              title="Drift Master"
              description="Drift Master is a thrilling 3D car controller game designed to deliver an unparalleled drifting experience. With advanced physics and realistic vehicle dynamics, every turn and slide feels authentic and exhilarating. Master the art of drifting as you navigate through various challenging tracks, each designed to test your skills and precision.

The intuitive controls allow you to effortlessly steer, accelerate, and brake, providing a seamless and responsive driving experience. Whether you're a seasoned drifter or a beginner, Drift Master offers a range of difficulty levels to suit your expertise. Stunning 3D graphics and lifelike animations bring the cars and environments to life, immersing you in high-octane action."
             // ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Thumbs'X"
              description="Introducing an exceptional Android game that stands out for its intricately designed coding and development process. The creation of this game involved a meticulous and complex approach, demanding considerable time and effort to overcome intricate challenges throughout the development journey. Our dedicated team invested several days in crafting a gaming experience that not only meets but exceeds industry standards. The complexity of the coding and design aspects showcases our commitment to delivering a product of the highest quality. Each stage of development required the team to navigate through intricate challenges, ensuring that every aspect of the game met our stringent standards for excellence. The result is a unique and stunning Android game that reflects our unwavering dedication to innovation and precision in game development. Download and immerse yourself in a gaming experience that has been meticulously crafted, tested, and refined to offer unparalleled entertainment on the Android platform."
              ghLink="https://github.com/19sajib/mern-blog-app"
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SW1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SW2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SW3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SW4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="What the bird?"
              description="An Android game born from the inspiration of the legendary Flappy Bird iOS phenomenon, marking one of my early ventures into game development. Meticulously designed, this project showcases my commitment to crafting engaging experiences. The game offers polished and intuitive gameplay mechanics, seamlessly blending challenging levels with smooth controls. Its captivating visuals and immersive sound design elevate the overall experience. As a testament to my early growth in the field, this project stands as a finely tuned, addictively entertaining masterpiece. Embark on a journey through skillfully crafted levels, testing reflexes and strategic thinking. This Android game, inspired by a classic, is not just a homage but a unique and well-polished creation, reflecting my dedication to delivering top-notch entertainment in the world of mobile gaming"
              
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={wtb6}
                    alt="Sixth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="HASIE"
              description="
HAISE is a mesmerizing 2D mobile game inspired by the atmospheric brilliance of Limbo. Dive into a haunting, monochromatic world where every shadow and light contrast creates a sense of eerie beauty. The game features meticulously crafted 2D bone-rigging animations that bring the protagonist's movements to life, enhancing the immersive experience.
You play as a lone, silhouetted figure navigating through a series of dark, treacherous landscapes filled with intricate puzzles and hidden dangers. Each level presents unique challenges that require keen observation and quick reflexes to overcome. The haunting soundtrack and minimalist design further draw you into this mysterious, foreboding world.
As you progress, uncover the enigmatic story woven into the environment, piecing together the narrative through visual and auditory cues.Haise is not just a game but an artistic journey that challenges your mind and captivates your senses."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={h1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={h2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={h3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={h4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </ProjectCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
