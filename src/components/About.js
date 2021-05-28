import React from "react";
import pic from "../images/selfie.png";

function About() {
  return (
    <>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="">
              <img
                className="selfie"
                style={{ height: "200px" }}
                src={pic}
              ></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="titleHeading">Clayton Jones</p>
          </div>
        </div>

        <div className="aboutMe">
          <p className="aboutFont">
            Full Stack Developer and Army Veteran with collective experience
            training and knowledge in full-stack technologies and Leadership.
            Possess comprehensive knowledge in understanding the user experience
            and user interface design process. Hands-on experience spanning the
            design and delivery of full-stack web applications, writing new
            computer programs and changing and maintaining existing programs as
            directed. Capable of managing the end-to-end life cycle for the
            production of applications. Adept to independently evaluating work
            according to employer-specific criteria and exceeding expectations
            of senior management
          </p>
        </div>
      </div>
      <div>
        <div className="media-content">
          <p className="aboutHeading">Education </p>
          <p className="educationText aboutFont">
            Full Stack Computer Science Certificate : Southern Methodist
            University | Bachelor of Arts Political Science : University of
            Texas 2020
          </p>
          <p></p>
        </div>
      </div>

      <div className="">
        <p className="aboutHeading">Special Training</p>
        <p className="educationText aboutFont">
          Sexual Harassment/Assault Response and Prevention (SHARP) | Diversity
          Awareness | Equal Opportunity
        </p>
      </div>
    </>
  );
}

export default About;
