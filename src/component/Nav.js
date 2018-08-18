import {Navbar, NavItem, Nav, NavLink} from 'reactstrap';
import React from 'react';

export default class NavComponent extends React.Component {
  render() {
    return (
      <div>
    <Navbar>
      <Nav className="ml-auto">
        <NavItem>
          <NavLink href="/">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/portfolio">My Work</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
  )
  }
}
