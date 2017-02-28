collection @tickets
cache ["agent-reports-", @tickets]
attributes :id, :title, :description, :closed_on
node(:state) { |t| t.workflow_state }
node(:opened_on) { |t| t.created_at.to_date }
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
