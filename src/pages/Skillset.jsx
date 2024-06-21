import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>
        <h2>  <br/><br/>
Advanced Problem Solving and Statistical Analysis<br/><br/>   
Proficient in C# Scripting for Unity<br/><br/>   
Expertise in Texturing, Rigging, and Animation<br/><br/>   
UI/UX Design for Interactive Games<br/><br/>   
3D Art and Modeling<br/><br/>   
Effective Visual Communication of Ideas<br/><br/>   
Proficient in Utilizing AR/VR Features<br/><br/>   
Strong Understanding of Game Physics and Rendering Techniques<br/><br/>   
Proficient in C and C++ Programming<br/><br/>          
                  
        </h2>
       

       
      </Container>
    </Container>
  )
}

export default Skillset