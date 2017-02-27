# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create!([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create!(name: "Luke", movie: movies.first)

fede = Account.create!(email: "iachetti.federico@gmail.com", password: "123456", password_confirmation: "123456")

accounts = 1.upto(5).flat_map do |i|
  pass= "123456"
  [
   Account.create!(name: "customer#{i}",      email: "customer#{i}@example.com",      password: pass, password_confirmation: pass),
   Account.create!(name: "agent#{i}",         email: "agent#{i}@example.com",         password: pass, password_confirmation: pass),
   Account.create!(name: "agentcustomer#{i}", email: "agentcustomer#{i}@example.com", password: pass, password_confirmation: pass)
  ]
end

Customer.create!(account: Account.where(email: "iachetti.federico@gmail.com").first)
Agent.create!(   account: Account.where(email: "iachetti.federico@gmail.com").first)

customers = accounts.select {|account| account.email.include?("customer") }.map do |account|
  Customer.create!(account: account)
end

agents = accounts.select {|account| account.email.include?("agent") }.map do |account|
  Agent.create!(account: account)
end


1.upto(30) do |i|
  Ticket.create!(customer: customers.sample,
                 title: "Ticket #{i}",
                 description: "Description for Ticket #{i}")
end
