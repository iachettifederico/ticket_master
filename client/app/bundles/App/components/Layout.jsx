import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { Container, MenuItem, NavBar, Dropdown, Nav,
         NavBarHeader, Separator,
         NavBarCollapse} from './Bootstrap';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavBar inverse>
          <NavBarHeader>Ticket Master</NavBarHeader>
          <NavBarCollapse>

            <Nav>
              <MenuItem><Link to="/tickets">Tickets</Link></MenuItem>
              <MenuItem><Link to="/tickets/new">Open Ticket</Link></MenuItem>
            </Nav>
            <Nav pullRight>
              <Dropdown title="customer@example.com">
                <li><a href="#">Profile</a></li>
                <Separator/>
                <li><a href="#">Log out</a></li>
              </Dropdown>
            </Nav>

          </NavBarCollapse>
        </NavBar>

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
