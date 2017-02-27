collection @tickets
cache ["agent-tickets-", @tickets]
attributes :id, :title, :description
node(:state) { |t| t.workflow_state }
node(:customer) { |t|
  {
   email: t.customer.email,
   name:  t.customer.name

  }
}
node(:agent) { |t|
  if(t.agent)
    {
     email: t.agent.email,
     name:  t.agent.name
    }
  end
}
