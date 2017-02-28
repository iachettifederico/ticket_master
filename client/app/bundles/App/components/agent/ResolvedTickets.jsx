import React, { PropTypes } from 'react';
import FontAwesome from '../FontAwesome';

export default class ResolvedTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickets: this.props.tickets };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ tickets: nextProps.tickets });
  }

  pdfDownloadLink() {
    return(<a href={"/api/reports/agent.pdf?token="+this.props.auth_token}
           title="Download as PDF" target="#" download={true}>
            <FontAwesome icon="file-pdf-o" color="red"/>
           </a>);
  }
  
  render() {
    return (
      <div>
        <h3> Resolved tickets on the last month {this.pdfDownloadLink()}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Customer</th>
              <th>Created</th>
              <th>Closed</th>
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

  render() {
    const ticket = this.state.ticket;
    return (
      <tr id={"ticket-row-" + ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.description}</td>
        <td>{ ticket.customer.name }</td>
        <td>{ ticket.opened_on }</td>
        <td>{ ticket.closed_on }</td>
      </tr>
    );
  }

}
