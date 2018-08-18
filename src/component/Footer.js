import React from 'react';
import {Button, Nav, NavItem} from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (<footer id="footer">
      <Nav justified>
        <NavItem>
          <Button size="lg" href="mailto:claudialigidakis@gmail.com">
            <i className="fa fa-google"></i>
          </Button>
        </NavItem>
        <NavItem>
          <Button size="lg" href="https://www.linkedin.com/in/claudia-ligidakis/">
            <i className="fa fa-linkedin"></i>
          </Button>
        </NavItem>
        <NavItem>
          <Button size="lg" href="https://github.com/claudialigidakis">
            <i className="fa fa-github"></i>
          </Button>
        </NavItem>
      </Nav>
        <div className="text-center small copyright">Copyright &copy; Claudia Ligidakis 2018</div>
    </footer>)
  }
}
