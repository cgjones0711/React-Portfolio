import React from 'react'
import bomb from "../images/bombs_away.png"
import note from "../images/note-taker.png"
import recipe from "../images/recipe-blog.png"
import workout from "../images/workout.png"

export default function Projects() {
    return (
        <section className="card1">
            <div className= "projects">
        <div className="card-image">
          <figure className="">
          <img style={{height: "200px"}} src={note}>
      </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
             
            </div>
            <div className="media-content">
              
              <a href="https://notetaker1986.herokuapp.com/">Note Taker</a>
            </div>
          </div>
            <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. </p>
          
            </div>
          
          </div>
        </div>
        <div className= "projects">
        <div className="card-image">
          <figure className="">
          <img style={{height: "200px"}} src={recipe}>
      </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
             
            </div>
            <div className="media-content">
              
        
            <a href="https://phenomenal-recipes1988.herokuapp.com/">Recipe Blog</a>
            </div>
          </div>
      
          <div className="content">
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. </p>
        
           
          </div>
          </div>
        </div>
        <div className= "projects">
        <div className="card-image">
          <figure className="">
          <img style={{height: "200px"}} src={workout}>
      </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
             
            </div>
            <div className="media-content">
            
              <a href="https://cgj-workout-tracker.herokuapp.com/?id=60959d5347b17f0015e48644">Fitness Tracker</a>
            </div>
          </div>
      
          <div className="content">
         <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. </p>
  
         </div>  
          
          </div>
        </div>
      </section>
      
 
    )
}

