admin_role    = Role.create!(name: "admin")
agent_role    = Role.create!(name: "agent")
customer_role = Role.create!(name: "customer")

admin = Account.create!(email:    Rails.application.secrets[:admin_mail],
                        password: Rails.application.secrets[:admin_pass],
                        roles:    [admin_role])

accounts = 1.upto(5).flat_map do |i|
  pass = "123456"
  [
   Account.create!(name: "customer#{i}",
                   email: "customer#{i}@example.com", password: pass,
                   roles: [customer_role]),
   Account.create!(name: "agent#{i}",
                   email: "agent#{i}@example.com",    password: pass,
                   roles: [agent_role]),
   Account.create!(name: "agtcustr#{i}",
                   email: "agentcustomer#{i}@example.com", password: pass,
                   roles: [agent_role, customer_role])
  ]
end

admins    = Account.includes(account_roles: :role).where(roles: {name: 'admin'})
agents    = Account.includes(account_roles: :role).where(roles: {name: "agent"    })
customers = Account.includes(account_roles: :role).where(roles: {name: "customer" })

1.upto(30) do |i| Ticket.create!(customer: customers.sample, title:
  "Ticket #{i}", description: "Description for Ticket #{i}") end
