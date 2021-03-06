import React, { PropTypes } from 'react';

import ResolvedTickets from '../../components/agent/ResolvedTickets';
import { Button } from '../../components/Bootstrap';

export default class ReportsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tickets: [] };
  }

  componentDidMount() {
    $.get('/api/reports/agent.json?token='+this.props.route.auth_token).done((tickets) => {
      this.setState({tickets: tickets});
    });
  }

  render() {
    const _this = this;
    return (
      <ResolvedTickets tickets={this.state.tickets} auth_token={this.props.route.auth_token}/>
    );
  }
}
