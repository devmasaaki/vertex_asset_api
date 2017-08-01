module Api 
  module V1
    class CategoryResource < JSONAPI::Resource
      attributes :name, :category_type, :sort, :deleted, :created_at, :updated_at
      has_many :sub_categories
      belongs_to :parent
      has_many :items
    end
  end
end