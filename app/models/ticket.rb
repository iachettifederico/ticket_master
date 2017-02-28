class Ticket < ApplicationRecord
  belongs_to :customer, class_name: "Account", foreign_key: "customer_id", optional: true
  belongs_to :agent,    class_name: "Account", foreign_key: "agent_id"   , optional: true

  has_many :comments

  include Workflow
  workflow do
    state :new do
      event :assign, :transitions_to => :assigned
      event :new, :transitions_to => :assigned
    end

    state :assigned do
      event :assign, :transitions_to => :assigned
      event :resolve, :transitions_to => :resolved
    end

    state :resolved do
      event :resolve, :transitions_to => :resolved
    end
  end

  def assign(agent)
    update_attributes(agent: agent)
    touch
  end

  def resolve
    update_attributes(closed_on: Date.today)
  end

  def self.closed_last_month
    where("closed_on >= ? AND closed_on <= ?", Date.today.beginning_of_month, Date.today.end_of_month)
  end

  def self.unassigned
    where(workflow_state: "new")
  end

  def self.assigned
    where(workflow_state: "assigned")
  end

  def self.resolved
    where(workflow_state: "resolved")
  end
end
