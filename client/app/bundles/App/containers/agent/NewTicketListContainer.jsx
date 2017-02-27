import React, { PropTypes } from 'react';

import TicketList from '../../components/agent/TicketList';
import { Button } from '../../components/Bootstrap';

export default class NewTicketListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tickets: [] };
  }

  fetchTickets(){
    $.get('/api/new_agent_tickets.json').done((tickets) => {
      this.setState({tickets: tickets});
    });
  }

  componentDidMount() {
    this.fetchTickets();
    setInterval(() => {
      this.fetchTickets();
    }, 3000);
  }

  render() {
    return (
      <TicketList tickets={this.state.tickets} />
    );
  }
}
