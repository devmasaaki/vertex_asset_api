module Api 
  module V1
    class CategoryResource < JSONAPI::Resource
      attributes :name, :created_at, :updated_at
      has_many :sub_categories
    end
  end
end