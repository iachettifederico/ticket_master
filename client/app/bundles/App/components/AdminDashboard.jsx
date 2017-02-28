import React, { PropTypes }           from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Layout              from './admin/Layout';
import AccountListContainer from '../containers/admin/AccountListContainer';
import NoMatch             from './NoMatch';

export default class AdminDashboard extends React.Component {
  static propTypes = {
    account: PropTypes.object.isRequired
  };

  constructor(props, _railsContext) {
    super(props);

    // console.log(this.props.account);
    
    this.state = { account: this.props.account };
  }

  render() {
    const token = this.props.auth_token;
    return (
      <Router history={hashHistory}>
        <Route path=""                   component={Layout}
               account={this.state.account}>
          <Route path="/" component={AccountListContainer} auth_token={token}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    );
  }
}
