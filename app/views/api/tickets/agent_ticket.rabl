collection @ticket
cache ["agent-ticket-", @ticket]
attributes :id, :title, :description
node(:state) { |t| t.workflow_state}
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
node(:comments) { |t|
  t.comments.map { |comment|
    {
     id:   comment.id,
     body: comment.body,
     from: {
            name: comment.from.name,
            type: comment.from.role
           }
    }
  }
}
