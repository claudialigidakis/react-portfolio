import React from 'react';
import {Row} from 'reactstrap';

export default class Skills extends React.Component {
  render() {
    return (
    <section id="skills">
      <div className="container text-center">
        <div className="content-section-heading">
          <h2>Coding Technologies Known</h2>
        </div>
        <br/>
        <Row>
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
            <ul>JavaSript</ul>
            <ul>NodeJs</ul>
            <ul>Express</ul>
            <ul>PostGres</ul>
            <ul>SQL</ul>
          </div>
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
            <ul>HTML/CSS</ul>
            <ul>React/Redux</ul>
            <ul>Bootstrap</ul>
            <ul>Mocha/Chai</ul>
            <ul>Postman</ul>
          </div>
        </Row>
      </div>
    </section>)
  }
}
