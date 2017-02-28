class Comment < ApplicationRecord
  belongs_to :account
  belongs_to :ticket
end
