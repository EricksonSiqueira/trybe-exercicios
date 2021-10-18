import React from 'react';
// import About from './About';
// import HowToUse from './HowToUse';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() { 
    return (
      <div>
        <h1>This is my home page</h1>
        <Link to="/about">About</Link>
        <p>This is the home page text, welcome to the site.</p>
        {/* <Route path="/about" component={ About } />
        <Route path="/howtouse" component={ HowToUse } /> */}
      </div>
    );
  }
}

export default Home;
