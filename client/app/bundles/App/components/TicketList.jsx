import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class TicketList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tickets: this.props.tickets };

  }

  render() {
    return (
      <div>
        My Tickets
        <table className="table">
          <thead>
            <tr>
              <th>Actions</th>
              <th>Title</th>
              <th>Description</th>
              <th>Agent</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tickets.map((ticket, index) => {
                return(
                  <tr key={"ticket-" + ticket.id}>
                    <td>Actions</td>
                    <td><Link to="/tickets/1">{ticket.title}</Link></td>
                    <td>{ticket.description}</td>
                    <td>{ticket.agent && ticket.agent.name}</td>
                    <td>{ticket.state}</td>
                  </tr>
                );
              })
            }
      </tbody>
        </table>
        </div>
    );
  }
}
