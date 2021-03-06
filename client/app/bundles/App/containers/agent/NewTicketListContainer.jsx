import React, { PropTypes } from 'react';

import TicketList from '../../components/agent/TicketList';
import { Button } from '../../components/Bootstrap';

export default class NewTicketListContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { tickets: [] };
  }

  fetchTickets(){
    $.get('/api/new_agent_tickets.json?token='+this.props.route.auth_token).done((tickets) => {
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
      <TicketList tickets={this.state.tickets}
                  auth_token={this.props.route.auth_token}/>
    );
  }
}
