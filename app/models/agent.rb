class Agent < ApplicationRecord
  belongs_to :account
  has_many :tickets

  include Accountable
end
