import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header backgroundImage="">
        <h1>Clayton Jones</h1>
        <h2>Full-Stack Developer</h2>
      </Header>
      <About style={{ marginTop: 30 }}>
        <p>
          Full Stack Developer and Army Veteran with collective experience
          training and knowledge in both front end and back end technologies.
          Possess comprehensive knowledge in understanding the user experience
          and user interface design process. Hands-on experience spanning the
          design and delivery of full-stack web applications, writing new
          computer programs and changing and maintaining existing programs as
          directed. Capable of managing the end-to-end life cycle for the
          production of software and applications. Adept to independently
          evaluating work according to employer-specific criteria and exceeding
          expectations of senior management
        </p>
        <h1>Eduction</h1>
        <p>
        Full Stack Computer Science Certificate | Southern Methodist University 
        Bachelor of Arts Political Science | University of Texas | 2020

        </p>
        <h1>Specialized Military Training:</h1>
        <p>
        Sexual Harassment/Assault Response and Prevention (SHARP)  Training
        Advanced Leader Course, Primary Leadership Development Course
        Advanced Situational Awareness Course
        Diversity Awareness, Equal Opportunity

        </p>
      </About>
      <Footer backgroundImage="">
        <h1>Clayton Jones</h1>
        <h2>Full-Stack Developer</h2>
      </Footer>
    </div>
  );
}

export default About;
