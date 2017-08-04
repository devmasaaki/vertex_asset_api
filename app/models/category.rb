class Category < ApplicationRecord
  has_many :subcategories, class_name: "Category", foreign_key: "parent_id"

  belongs_to :parent, class_name: "Category"

  belongs_to :asset
  has_many  :items

  scope :toplevel, -> { where(category_type: 0) }

  validates :parent, presence: true, allow_nil: true
  validates :asset, presence: true, allow_nil: true
end
