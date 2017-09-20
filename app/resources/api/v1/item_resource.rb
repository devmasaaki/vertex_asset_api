module Api 
  module V1
    class ItemResource < JSONAPI::Resource
      attributes :title, :file, :sort, :deleted, :assigned, :created_at, :updated_at, :tags
      attribute :filesize, delegate: :human_size
      attribute :assetid, delegate: :asset_id
      has_one :category

      filter :content, apply: ->(records, value, _options) {
        records.where("content @@ plainto_tsquery(?) or tags like '%' || ? || '%'", value[0], value[0])
      }
      filter :assetid
      filter :deleted, default: 'false,true'
      filter :assigned, default: 'true,false'
      filter :tags
      # def assigned
      
      #   if (category.nil?)
      #     true
      #   else
      #     !category.deleted
      #   end
      # end
    end
  end
end