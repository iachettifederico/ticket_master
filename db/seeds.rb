# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)


# accounts = Account.create(
#                          [
#                           { email: 'iachetti.federico@gmail.com',
#                            password: '123456', password_confirmation: '123456' },
#                           { email: 'customer1@example.com',   password: '123456', password_confirmation: '123456' },
#                           { email: 'customer2@example.com',   password: '123456', password_confirmation: '123456' },
#                           { email: 'customer3@example.com',   password: '123456', password_confirmation: '123456' },
#                           { email: 'agent1@example.com',      password: '123456', password_confirmation: '123456' },
#                           { email: 'agent2@example.com',      password: '123456', password_confirmation: '123456' },
#                           { email: 'agent3@example.com',      password: '123456', password_confirmation: '123456' },
#                           { email: 'agentcustomer1@example.com', password: '123456', password_confirmation: '123456' },
#                           { email: 'agentcustomer2@example.com', password: '123456', password_confirmation: '123456' },
#                           { email: 'agentcustomer3@example.com', password: '123456', password_confirmation: '123456' },
#                          ]
#                         )

# Customer.create(account: Account.where(email: "iachetti.federico@gmail.com").first)
# Agent.create(   account: Account.where(email: "iachetti.federico@gmail.com").first)


# customers = accounts.select {|account| account.email.include?("customer") }.map do |account|
#   Customer.create(account: account)
# end

# agents = accounts.select {|account| account.email.include?("agent") }.map do |account|
#   Agent.create(account: account)
# end


# 1.upto(20) do |i|
#   Ticket.create(customer: customers.sample, agent: agents.sample, title: "Ticket #{i}", description: "Description for Ticket #{i}")
# end
