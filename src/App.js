import React, {Component} from 'react';
import {Route} from 'react-router-dom'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NavComponent from './component/Nav'
import Footer from './component/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavComponent/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Footer/>
      </div>
    );
  }
}
