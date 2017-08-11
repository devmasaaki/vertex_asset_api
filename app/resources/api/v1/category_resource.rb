module Api 
  module V1
    class CategoryResource < JSONAPI::Resource
      attributes :name, :categorytype, :sort, :deleted,  :assigned, :created_at, :updated_at
      attribute :assetid1, delegate: :sub_asset_id
      has_many :subcategories
      has_one :parent
      has_one :asset
      has_many :items

      filter :assetid1
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