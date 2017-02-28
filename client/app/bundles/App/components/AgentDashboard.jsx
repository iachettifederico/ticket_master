import React, { PropTypes }           from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout     from './agent/Layout';

import TicketListContainer    from '../containers/agent/TicketListContainer';
import NewTicketListContainer from '../containers/agent/NewTicketListContainer';
import TicketContainer        from '../containers/agent/TicketContainer';
import ReportsContainer       from '../containers/agent/ReportsContainer';

import NoMatch    from './NoMatch';

export default class AgentDashboard extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { account: this.props.account };
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path=""                   component={Layout}
               account={this.state.account}>
          <Route path="/"                  component={TicketListContainer}/>
          <Route path="/tickets/new"       component={NewTicketListContainer}/>
          <Route path="/tickets/:ticketId" component={TicketContainer}/>
          <Route path="/reports"           component={ReportsContainer}/>
          <Route path="*"                  component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
