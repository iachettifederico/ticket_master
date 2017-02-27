Rails.application.routes.draw do
  devise_for :accounts
  resources :pepes


  get "dashboard/customer" => "spa#customer"
  get "dashboard/agent" => "spa#agent"

  get "api/customer_tickets.json" => "api/tickets#customer_tickets"
  get "api/customer_tickets/:ticket_id.json" => "api/tickets#customer_ticket"
  get "api/customer_tickets/:ticket_id/comments.json" => "api/tickets#customer_ticket_comments"

  get "api/agent_tickets.json" => "api/tickets#agent_tickets"
  get "api/new_agent_tickets.json" => "api/tickets#new_agent_tickets"
  get "api/agent_tickets/:ticket_id.json" => "api/tickets#agent_ticket"
  get "api/agent_tickets/:ticket_id/comments.json" => "api/tickets#agent_ticket_comments"
  post "api/agent_tickets/:ticket_id/take.json" => "api/tickets#agent_take_ticket"
  post "api/agent_tickets/:ticket_id/resolve.json" => "api/tickets#agent_resolve_ticket"
  post "api/agent_tickets/:ticket_id/comments/new.json" =>
  "api/tickets#new_agent_comment"
  post "api/customer_tickets/:ticket_id/comments/new.json" =>
  "api/tickets#new_customer_comment"

  root to: 'spa#dashboard'
end
