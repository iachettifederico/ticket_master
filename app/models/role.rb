class Role < ApplicationRecord
  has_many :account_roles
  has_many :accounts, through: :account_roles

  def self.[](role_or_name)
    name = role_or_name.is_a?(Role) ? role_or_name.name : role_or_name
    Role.where(name: name).first
  end
end
