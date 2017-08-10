class Item < ApplicationRecord
  # has_many :categories
  belongs_to :category
  belongs_to :asset
  
  validates :file, presence: true, on: :create
  validates :title, presence: true

  mount_uploader :file, FileUploader

end
