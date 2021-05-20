import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron'
import Bitmojipic from "./photos/bombs_away"

function Home(){
  return (
  <div>

<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

  <Image
   className="hero-pic" src={Bitmojipic} alt="mortar"
  />
  
  
  </div>
);
  }

export default Home;
