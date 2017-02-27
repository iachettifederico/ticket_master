import React, { PropTypes } from 'react';
import { Link }    from 'react-router';
import { isEqual } from 'underscore';
import { State }   from '../State';
import { ButtonLink, Button, ButtonGroup } from '../Bootstrap';

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
              <th>Actions</th>
              <th>Title</th>
              <th>Description</th>
              <th>Customer</th>
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

  take() {
    let url = "/api/agent_tickets/" + this.state.ticket.id + "/take.json";
    $.post(url)
      .done((ticket) => { });

  }

  resolve() {
    let url = "/api/agent_tickets/" + this.state.ticket.id + "/resolve.json";
    $.post(url)
      .done((ticket) => { });

  }

  takeButton() {
    if(this.state.ticket.state == "new") {
      return <Button type="primary" onClick={()=>{this.take();}}>Take</Button>;
    }else {
      return "";

    }
  }

  resolveButton() {
    if(this.state.ticket.state == "assigned") {
      return(
        <Button type="success"
                onClick={()=>{this.resolve();}}>
          Resolve
        </Button>)
      ;
    }else {
      return "";
    }
  }

  render() {
    const ticket = this.state.ticket;
    return (
      <tr id={"ticket-row-" + ticket.id}>
        <td><State state={ticket.state}/></td>
        <td>
          <ButtonGroup size="xs" role="group">
            {this.takeButton()}
            {this.resolveButton()}
          </ButtonGroup>
        </td>
        <td>
          <Link to={"/tickets/"+ticket.id}>{ticket.title}</Link>
        </td>
        <td>{ticket.description}</td>
        <td>{ ticket.customer.name }</td>
      </tr>
    );
  }

}
