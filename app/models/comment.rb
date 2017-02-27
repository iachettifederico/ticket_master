class Comment < ApplicationRecord
  belongs_to :from, polymorphic: true
  belongs_to :ticket
end
