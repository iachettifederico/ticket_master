import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { Container, MenuItem, NavBar, Dropdown, Nav,
         NavBarHeader, Separator,
         NavBarCollapse} from '../Bootstrap';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { account: this.props.route.account };
  }

  render() {
    return (
      <div>
        <NavBar inverse>
          <NavBarHeader>Ticket Master</NavBarHeader>
          <NavBarCollapse>
            <Nav>
              <MenuItem><Link to="/tickets/new">Open Ticket</Link></MenuItem>
              <MenuItem><Link to="/tickets">My Tickets</Link></MenuItem>
            </Nav>

            <Nav pullRight>
              <Dropdown title={this.state.account.email}>
                <li><a href="#">Profile</a></li>
                <Separator/>
                <li>
                  <a rel="nofollow"
                     data-method="delete"
                     href="/accounts/sign_out">Log out</a>
                </li>
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
