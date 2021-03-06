import React, { PropTypes }           from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout     from './customer/Layout';

import TicketListContainer from '../containers/customer/TicketListContainer';
import TicketContainer from '../containers/customer/TicketContainer';

import Ticket     from './customer/Ticket';
import NewTicket  from './customer/NewTicket';
import NoMatch    from './NoMatch';

export default class CustomerDashboard extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);

    // console.log(this.props.account);
    
    this.state = { account: this.props.account };
  }

  render() {
    const token = this.props.auth_token;
    return (
      <Router history={hashHistory}>
        <Route path=""                   component={Layout}
               account={this.state.account}>
          <Route path="/"                  component={TicketListContainer} auth_token={token}/>
          <Route path="/tickets"           component={TicketListContainer} auth_token={token}/>
          <Route path="/tickets/agent"     component={TicketListContainer} auth_token={token}/>
          <Route path="/tickets/new"       component={NewTicket} auth_token={token}/>
          <Route path="/tickets/:ticketId" component={TicketContainer} auth_token={token}/>
          <Route path="*"                  component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
