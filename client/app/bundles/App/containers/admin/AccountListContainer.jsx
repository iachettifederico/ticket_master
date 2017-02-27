import React, { PropTypes } from 'react';

import AccountList from '../../components/admin/AccountList';
import { Button } from '../../components/Bootstrap';

export default class AccountListContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { accounts: [] };
  }

  fetchAccounts(){
    $.get('/api/accounts.json').done((accounts) => {
      this.setState({accounts: accounts});
    });
  }

  componentDidMount() {
    this.fetchAccounts();
    setInterval(() => {
      this.fetchAccounts();
    }, 3000);
  }

  render() {
    const _this = this;
    return (
      <div>
        <AccountList accounts={this.state.accounts}/>
      </div>
    );
  }
}
