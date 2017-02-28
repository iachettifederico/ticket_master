import React, { PropTypes }           from 'react';
import { Container, ButtonGroup, Well } from './Bootstrap';
import classNames from 'classnames';

export default class App extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
    this.state = { account: this.props.account };
  }

  links() {
    if(this.props.account.admin ||
       this.props.account.agent ||
       this.props.account.customer) {
      return(
        <div>
          <p className="text-center">You can access to this dashboards</p>
          <ButtonGroup size="lg"  justified>
            <DashboardButton role="customer" type="primary"
                             condition={this.props.account.customer}>
              Customer Dashboard
            </DashboardButton>
            <DashboardButton role="agent" type="success"
                             condition={this.props.account.agent}>
              Agent Dashboard
            </DashboardButton>
            <DashboardButton role="admin" type="danger"
                             condition={this.props.account.admin}>
              Admin Dashboard
            </DashboardButton>

          </ButtonGroup>
        </div>
      );
    } else {
      return(
        <div className="text-center">
          <p>You don't have access to dashboards yet</p>
          <p>Please contact a system administrator</p>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.account);
    return (
      <Container >
        <h1 className="text-center">Welcome to Ticket Master</h1>
        <h4 className="text-center">The best support services in the Universe!</h4>
        <hr/>
        <Well>
          {this.links()}
        </Well>
      </Container>
    );
  }
}

export class DashboardButton extends React.Component {
  btnClasses() {
    return classNames(["btn", "btn-" + this.props.type]);
  }

  render() {
    if(this.props.condition){
      return (
        <a href={"/dashboard/" + this.props.role}
           className={this.btnClasses()}>
          {this.props.children}
        </a>
      );
    } else {
      return null;
    }
  }
}
