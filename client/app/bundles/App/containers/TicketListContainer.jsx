import React, { PropTypes } from 'react';
import TicketList from '../components/TicketList';

export default class TicketListContainer extends React.Component {
  constructor() {
    super();
    this.state = { tickets: this.getTickets() };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/my-tickets.json",
  //     dataType: 'json',
  //     success: function(tickets) {
  //       this.setState({tickets: tickets});
  //     }.bind(this)
  //   });
  // }

  getTickets() {
    return [
      { id: 1, title: "Ticket 1", description: "Description for Ticket 1", state: "new", customer: {name: "Customer", email: "customer@example.com"}},
      { id: 2, title: "Ticket 2", description: "Description for Ticket 2", state: "new", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent", email: "agent@example.com"}},
      { id: 3, title: "Ticket 3", description: "Description for Ticket 3", state: "assigned", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent2", email: "agent@example.com"}},
      { id: 4, title: "Ticket 4", description: "Description for Ticket 4", state: "processing", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent2", email: "agent@example.com"}},
      { id: 5, title: "Ticket 5", description: "Description for Ticket 5", state: "on_hold", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent3", email: "agent@example.com"}},
      { id: 6, title: "Ticket 6", description: "Description for Ticket 6", state: "closed", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent3", email: "agent@example.com"}},
      { id: 7, title: "Ticket 7", description: "Description for Ticket 7", state: "resolved", customer: {name: "Customer", email: "customer@example.com"}, agent: {name: "Agent4", email: "agent@example.com"}},
      { id: 8, title: "Ticket 8", description: "Description for Ticket 8", state: "new", customer: {name: "Customer", email: "customer@example.com"}},
      { id: 9, title: "Ticket 9", description: "Description for Ticket 9", state: "new", customer: {name: "Customer", email: "customer@example.com"}},
    ];
  }
  render() {
    return (
      <TicketList tickets={this.state.tickets}/>
    );
  }
}
