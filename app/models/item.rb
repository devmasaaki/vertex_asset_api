class Item < ApplicationRecord
  # has_many :categories
  belongs_to :category
end
