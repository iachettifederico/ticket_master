import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class FontAwesome extends React.Component {
  foClasses() {
    return classNames(
      "fa",
      "fa-" + this.props.icon
    );
  }

  color() {
    return this.props.color || "#000000";
  }
  render() {
    return (
      <i className={this.foClasses()} style={{color: this.color()}}></i>
    );
  }
}
