collection @accounts
cache ["accounts-", @accounts]
attributes :id, :email
node(:name)     {|a| a.name}
node(:admin)    {|a| a.admin?}
node(:agent)    {|a| a.agent?}
node(:customer) {|a| a.customer?}
