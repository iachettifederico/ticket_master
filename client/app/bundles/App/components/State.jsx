import React, { PropTypes } from 'react';
import { Label } from './Bootstrap';

export class State extends React.Component {
  constructor(props) {
    super(props);
  }

  getInfo() {
    return {
      new:      { type: "success", text: "New" },
      assigned: { type: "primary", text: "Assigned" },
      resolved: { type: "danger",  text: "Resolved" }
    }[this.props.state] || {text: this.props.state};
  }

  render() {
    return (
      <Label type={this.getInfo().type}>
        {this.getInfo().text}
      </Label>
    );
  }
}
