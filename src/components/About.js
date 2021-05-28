import React from "react";
import pic from "../images/selfie.png"


function About() {
  return (
   
   <>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="">
        <img style={{height: "200px"}} src={pic}>
          
</img>
        </figure>
      </div>
      <div className="media-content">
       
        <p className="aboutHeading">Clayton Jones</p>
      </div>
    </div>

    <div className="aboutMe">
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
   
  
    </div>
  </div>
  <div>

<div className="media-content">
       
        <p className="aboutHeading">Education </p>
          <p>
          Full Stack Computer Science Certificate Southern Methodist University |
          Bachelor of Arts Political Science  University of Texas  2020
          </p>
          <p>

          </p>
      </div>
    </div>

    <div className="content">
    <p className="aboutHeading">Special Training</p>
    <p>
          Sexual Harassment/Assault Response and Prevention (SHARP),
       Diversity Awareness, Equal Opportunity
        </p>
   
  
    </div>
  

</>
        
        
        
        
        
   
        
        
        
        
      
//         <h1>Eduction</h1>
//         <p>
//         Full Stack Computer Science Certificate Southern Methodist University |
//         Bachelor of Arts Political Science  University of Texas  2020

//         </p>
//         <h1>Specialized Military Training:</h1>
//         <p>
//         Sexual Harassment/Assault Response and Prevention (SHARP),
//         Advanced Leadership Course, Primary Leadership Development Course,
//         Advanced Situational Awareness Course,
//         Diversity Awareness, Equal Opportunity

//         </p>
//       </div>
//  </>
      )
    
  
}

export default About;
