class Category < ApplicationRecord
  has_many :sub_categories, class_name: "Category", foreign_key: "parent_id"

  belongs_to :parent, class_name: "Category"

  scope :toplevel, -> { where(category_type: 0) }
end
