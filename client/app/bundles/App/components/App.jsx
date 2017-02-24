import React, { PropTypes }           from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout     from './Layout';

import TicketList          from './TicketList';
import TicketListContainer from '../containers/TicketListContainer';

import Ticket     from './Ticket';
import NewTicket  from './NewTicket';
import NoMatch    from './NoMatch';

export default class App extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <Route path="tickets" component={TicketListContainer}/>
          <Route path="tickets/new"       component={NewTicket}/>
          <Route path="tickets/:ticketId" component={Ticket}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
