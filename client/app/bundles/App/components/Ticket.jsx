import React, { PropTypes } from 'react';
import { ButtonLink } from './Bootstrap';


export default class Ticket extends React.Component {
  render() {
    return (
      <div>
        Ticket {this.props.params.ticketId}
        <ButtonLink text="Back" to="/tickets/list" type="primary"/>
      </div>
    );
  }
}
