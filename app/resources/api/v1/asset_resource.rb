module Api 
  module V1
    class AssetResource < JSONAPI::Resource
      attributes :name, :created_at, :updated_at
      has_many :categories
    end
  end
end