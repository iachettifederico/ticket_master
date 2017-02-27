collection @accounts
cache ["accounts-", @accounts, *@accounts.map {|a| [a.customer, a.agent]}]
attributes :id, :email, :name, :admin
node(:customer) { |t| !!t.customer }
node(:agent) { |t| !!t.agent }
