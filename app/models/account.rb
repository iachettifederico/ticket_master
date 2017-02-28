class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :account_roles
  has_many :roles, through: :account_roles

  has_many :customer_tickets, class_name: "Ticket", foreign_key: "customer_id"
  has_many :agent_tickets,    class_name: "Ticket", foreign_key: "agent_id"

  def has_role?(role_or_name)
    role = Role[role_or_name]
    roles.include? role
  end

  def admin?
    has_role? :admin
  end

  def agent?
    has_role? :agent
  end

  def customer?
    has_role? :customer
  end

  def toggle_role(role_name)
    role = Role[role_name]
    if has_role?(role)
      self.roles.delete(role)
    else
      self.roles << role
    end
    touch
  end

  def self.admins
    Account.includes(account_roles: :role).where(roles: {name: 'admin'})
  end

  def self.agents
    Account.includes(account_roles: :role).where(roles: {name: "agent"    })
  end

  def self.customers
    Account.includes(account_roles: :role).where(roles: {name: "customer" })
  end
end
