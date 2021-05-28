import React from 'react'
import bombs from "../images/bombs_away.png"
import "../styles/styles.css"


export default function Home() {
    return (
      <section className="hero is-primary" style={{backgroundColor:"black", }}>
      <div className="hero-body">
      <p className="title">
     FULL STACK DEVELOPMENT
    </p>
    <p class="subtitle">
      
    </p>
      </div>
      <figure className="center-photo hero-img">
       <img style={{width: 275, height: 275, borderRadius: 400/ 2,}} src={bombs}>
       </img>
</figure>
    </section>
        
    )
    }
