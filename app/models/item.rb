class Item < ApplicationRecord
  # has_many :categories
  belongs_to :category

  validates :file, presence: true
  validates :title, presence: true

  mount_uploader :file, FileUploader
end
