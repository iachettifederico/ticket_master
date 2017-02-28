import React, { PropTypes }           from 'react';
import { Container, ButtonGroup } from './Bootstrap';
import classNames from 'classnames';

export default class App extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { account: this.props.account };
  }

  btnClasses(type) {
    return classNames(
      [
        "btn",
        "btn-" + type,

      ]
    )
  }

  render() {
    return (
      <Container >
        <h1 className="text-center">Welcome to Ticket Master</h1>
        <h4 className="text-center">The best support services in the Universe!</h4>
        <hr/>
        <ButtonGroup size="lg"  justified>
          <a href="/dashboard/customer" className={this.btnClasses("primary")}>
            Customer Dashboard</a>
          <a href="/dashboard/agent" className={this.btnClasses("success")}>
            Agent Dashboard</a>
          <a href="/dashboard/admin" className={this.btnClasses("danger")}>
            Admin Dashboard</a>
        </ButtonGroup>
      </Container>
    );
  }
}
