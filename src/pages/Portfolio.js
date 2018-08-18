import React from 'react';
import {Container, CardColumns} from 'reactstrap';
import PortfolioCards from './PortfolioCards'

const portfolioItems = [
  {
    "id": 1,
    "title": "WrightStream",
    "subtitle": "Workflow Tool for Artisans and Makers",
    "img": "http://wrightstream.com/assets/feature1.png",
    "githubLink": "https://github.com/wrightaim/wrightstream",
    "hrefLink": "http://wrightstream.com/",
    "labels": [
      "React",
      "Redux",
      "JavaScript",
      "SQL",
      "Knex.js",
      "PostGres",
      "Oauth",
      "Express",
      "PostMan",
      "React-DND-Beautiful"
    ]
  }, {
    "id": 2,
    "title": "Galvanize Snacks",
    "subtitle": "First React Application",
    "img": "https://media.giphy.com/media/mJR4wnzTokgZSAT5mU/giphy.gif",
    "githubLink": "https://github.com/gEightyTwo/BeanDip-gSnax-Front",
    "hrefLink": "http://gsnax-beananddip.surge.sh/",
    "labels": ["React", "Redux", "JavaScript", "SQL", "Knex.js"]
  }, {
    "id": 3,
    "title": "EmPath",
    "subtitle": "Analysis tool that analyzes twitter profiles and hashtags for user values, needs, and personality traits",
    "img": "http://i68.tinypic.com/rmsqhu.png",
    "githubLink": "https://github.com/claudialigidakis/Empath---Back-End",
    "hrefLink": "http://empath.surge.sh/",
    "labels": [
      "JavaScript",
      "SQL",
      "Knex.js",
      "CSS/HTML",
      "Surge",
      "Watson-Api",
      "Twitter-Api",
      "PostGres"
    ]
  }, {
    "id": 4,
    "title": "CountDown Beat",
    "subtitle": "Stop watch that sets a beat to your countdown",
    "img": "http://i67.tinypic.com/72u5c1.png",
    "githubLink": "https://github.com/claudialigidakis/musicStopWatch",
    "hrefLink": "http://countdown_beat.surge.sh/",
    "labels": ["JavaScript", "JQuery", "CSS/HTML", "Surge"]
  }
]

export default class Portfolio extends React.Component {

  render() {
    return (
      <section>
      <header>
        <h1>
          Claudia's Portfolio
        </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
        <circle fill="white" cx="0" cy="100" r="100"/>
        <circle fill="white" cx="200" cy="100" r="100"/>
      </svg>
    </header>
  <Container className="portfolio">
      <CardColumns>
        <PortfolioCards portfolioItems={portfolioItems}/>
      </CardColumns>
    </Container>
  </section>)
  }
}
