module Api 
  module V1
    class CategoryResource < JSONAPI::Resource
      attributes :name, :categorytype, :sort, :deleted, :created_at, :updated_at
      has_many :subcategories
      belongs_to :parent
      belongs_to :asset
      has_many :items
    end
  end
end