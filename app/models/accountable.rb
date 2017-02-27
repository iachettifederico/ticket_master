module Accountable
  def name
    account.name || account.email
  end

  def email
    account.email
  end

  def role
    self.class.to_s.downcase
  end
end
