import React, { PropTypes }           from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout     from './Layout';

import TicketList          from './TicketList';
import TicketListContainer from '../containers/TicketListContainer';

import Ticket     from './Ticket';
import NewTicket  from './NewTicket';
import NoMatch    from './NoMatch';

export default class AdminDashboard extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);

    // console.log(this.props.account);
    
    this.state = { account: this.props.account };
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path=""                   component={Layout}
               account={this.state.account}>
          <Route path="/"                  component={TicketListContainer}/>
          <Route path="/tickets/customer"  component={TicketListContainer}/>
          <Route path="/tickets/agent"     component={TicketListContainer}/>
          <Route path="/tickets/new"       component={NewTicket}/>
          <Route path="/tickets/:ticketId" component={Ticket}/>
          <Route path="*"                  component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
