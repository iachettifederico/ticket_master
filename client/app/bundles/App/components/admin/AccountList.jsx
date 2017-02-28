import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { isEqual } from 'underscore';
import { State } from '../State';
import FontAwesome from '../FontAwesome';

export default class AccountList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: this.props.accounts };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ accounts: nextProps.accounts });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Customer</th>
              <th>Agent</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.accounts.map((account) => {
                return <AccountRow account={account} key={"account-" + account.id}
                                     auth_token={this.props.auth_token}/>;
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export class AccountRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { account: this.props.account };
  }

  componentWillReceiveProps(newProps){
    if(!isEqual(this.state.account, newProps.account)) {
      this.setState({ account: newProps.account });
      $("#account-row-" + this.state.account.id)
        .effect("highlight", {}, 3000);
    }
  }

  boolTxt(bool) {
    if(bool) {
      return <FontAwesome icon="check" color="green"/>;
    } else {
      return <FontAwesome icon="times" color="red"/>;
    }
  }
    
  toggleAdmin(e) {
    e.preventDefault();
    $.post('/api/accounts/' + this.state.account.id + '/admin_toggle.json?token='+this.props.auth_token);
  }

  toggleCustomer(e) {
    e.preventDefault();
    $.post('/api/accounts/' + this.state.account.id + '/customer_toggle.json?token='+this.props.auth_token);
  }

  toggleAgent(e) {
    e.preventDefault();
    $.post('/api/accounts/' + this.state.account.id + '/agent_toggle.json?token='+this.props.auth_token);
  }

  render() {
    const account = this.state.account;
    return (
      <tr id={"account-row-" + account.id}>
        <td>{account.name}</td>
        <td>{account.email}</td>
        <td>
          <a href="#" onClick={(e)=>{this.toggleCustomer(e);}}>
            {this.boolTxt(account.customer)}
          </a>
        </td>
        <td>
          <a href="#" onClick={(e)=>{this.toggleAgent(e);}}>
            {this.boolTxt(account.agent)}
          </a>
        </td>
        <td>
          <a href="#" onClick={(e)=>{this.toggleAdmin(e);}}>
            {this.boolTxt(account.admin)}
          </a>
        </td>
      </tr>
    );
  }

}
