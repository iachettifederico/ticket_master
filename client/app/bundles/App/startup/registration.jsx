import ReactOnRails from 'react-on-rails';

import App               from '../components/App';
import CustomerDashboard from '../components/CustomerDashboard';
import AgentDashboard    from '../components/AgentDashboard';
import AdminDashboard    from '../components/AdminDashboard';

ReactOnRails.register({
  App, CustomerDashboard, AgentDashboard, AdminDashboard
});
