import React, { PropTypes } from 'react';
import Ticket from '../../components/customer/Ticket';
import { Button } from '../../components/Bootstrap';

export default class TicketContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: {},
      ticketId: props.params.ticketId
    };
  }

  fetchTicket(){
    let url = '/api/customer_tickets/'+ this.state.ticketId + '.json';
    $.get(url)
      .done((ticket) => {
        this.setState({ticket: ticket});
      });
  }

  componentDidMount() {
    this.fetchTicket();
  }

  render() {
    const _this = this;
    return (
      <div>
        <Ticket ticket={this.state.ticket}/>
      </div>
    );
  }
}
