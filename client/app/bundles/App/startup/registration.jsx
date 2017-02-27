import ReactOnRails from 'react-on-rails';

import CustomerDashboard from '../components/CustomerDashboard';
import AgentDashboard    from '../components/AgentDashboard';
import AdminDashboard    from '../components/AdminDashboard';

ReactOnRails.register({
  CustomerDashboard, AgentDashboard, AdminDashboard
});
