import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import NavTabs from './components/NavTabs';
function App() {
  return (
    <Router>
        <div>
          
           <Header />
           <NavTabs/>
           
           <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/React-Portfolio-1" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route path="*" component={Home} />
            </Switch> 
        <Footer/>
        </div>
      </Router>
  );
}
export default App;