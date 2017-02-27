import React, { PropTypes } from 'react';
import TicketList from '../../components/customer/TicketList';
import { Button } from '../../components/Bootstrap';

export default class TicketListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickets: [] };
  }

  fetchTickets(){
    $.get('/api/customer_tickets.json').done((tickets) => {
      this.setState({tickets: tickets});
    });
  }

  componentDidMount() {
    this.fetchTickets();
    setInterval(() => {
      this.fetchTickets();
    }, 5000);
  }

  render() {
    const _this = this;
    return (
      <div>
        <TicketList tickets={this.state.tickets}/>
      </div>
    );
  }
}
