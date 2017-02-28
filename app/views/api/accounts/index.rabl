collection @accounts
cache ["accounts-", @accounts]
attributes :id, :email, :name
node(:admin)    {|a| a.admin?}
node(:agent)    {|a| a.agent?}
node(:customer) {|a| a.customer?}
