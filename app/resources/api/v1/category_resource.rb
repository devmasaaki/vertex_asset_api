module Api 
  module V1
    class CategoryResource < JSONAPI::Resource
      attributes :name, :categorytype, :sort, :deleted,  :assigned, :created_at, :updated_at
      has_many :subcategories
      belongs_to :parent
      belongs_to :asset
      has_many :items

      filter :asset
      filter :deleted, default: 'false,true'
      filter :categorytype, default: '0,1'
      filter :assigned, default: 'true,false'

      # def assigned
      #   if (parent.nil?)
      #     true
      #   else
      #     !parent.deleted
      #   end
      # end
    end
  end
end