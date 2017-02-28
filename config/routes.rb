Rails.application.routes.draw do
  devise_for :accounts
  resources :pepes

  root to: 'spa#dashboard'
  get "dashboard/customer" => "spa#customer"
  get "dashboard/agent"    => "spa#agent"
  get "dashboard/admin"    => "spa#admin"

  get "api/customer_tickets.json" => "api/tickets#customer_tickets"
  get "api/customer_tickets/:ticket_id.json" => "api/tickets#customer_ticket"

  get "api/tickets/:ticket_id/comments.json" => "api/tickets#ticket_comments"
  post "api/tickets/:ticket_id/comments/new.json" =>
    "api/tickets#new_comment"

  get "api/agent_tickets.json" => "api/tickets#agent_tickets"
  get "api/new_agent_tickets.json" => "api/tickets#new_agent_tickets"
  get "api/agent_tickets/:ticket_id.json" => "api/tickets#agent_ticket"
  post "api/tickets/open.json" => "api/tickets#create"
  post "api/agent_tickets/:ticket_id/take.json" => "api/tickets#agent_take_ticket"
  post "api/agent_tickets/:ticket_id/resolve.json" => "api/tickets#agent_resolve_ticket"

  get "api/accounts.json" => "api/accounts#index"

  post "api/accounts/:account_id/admin_toggle.json" => "api/accounts#admin_toggle"
  post "api/accounts/:account_id/customer_toggle.json" => "api/accounts#customer_toggle"
  post "api/accounts/:account_id/agent_toggle.json" => "api/accounts#agent_toggle"

  get "api/reports/agent.json" => "api/reports#agent_reports"
  get "api/reports/agent.pdf" => "api/reports#agent_reports"

end
