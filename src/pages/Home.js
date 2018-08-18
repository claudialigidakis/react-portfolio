import {Jumbotron} from 'reactstrap';
import React from 'react';
import About from './About'
import Skills from './Skills'

export default class Home extends React.Component {
  render() {
    return (<div>
      <div className="home">
        <Jumbotron>
          <h1>
            <mark>Claudia Ligidakis</mark>
          </h1>
          <h3>
            <mark>Software Engineer</mark>
          </h3>
        </Jumbotron>
      </div>
      <About/>
      <Skills/>
    </div>)
  }
}
