import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { isEqual } from 'underscore';
import { State } from '../State';


export default class TicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickets: this.props.tickets };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ tickets: nextProps.tickets });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>

              <th>Title</th>
              <th>Description</th>
              <th>Agent</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tickets.map((ticket) => {
                return <TicketRow ticket={ticket} key={"ticket-" + ticket.id}/>;
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export class TicketRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticket: this.props.ticket };
  }

  componentWillReceiveProps(newProps){
    if(!isEqual(this.state.ticket, newProps.ticket)) {
      this.setState({ ticket: newProps.ticket });
      $("#ticket-row-" + this.state.ticket.id)
        .effect("highlight", {}, 3000);
    }
  }

  render() {
    const ticket = this.state.ticket;
    return (
      <tr id={"ticket-row-" + ticket.id}>
        <td><State state={ticket.state}/></td>
        <td>
          <Link to={"/tickets/"+ticket.id}>{ticket.title}</Link>
        </td>
        <td>{ticket.description}</td>
        <td>{ticket.agent && ticket.agent.name}</td>
      </tr>
    );
  }

}
