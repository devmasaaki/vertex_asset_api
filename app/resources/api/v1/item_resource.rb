module Api 
  module V1
    class ItemResource < JSONAPI::Resource
      attributes :title, :content, :file, :sort, :deleted, :assigned, :created_at, :updated_at
      attribute :filesize, delegate: :file_size
      belongs_to :category

      filter :deleted, default: 'false,true'
      filter :assigned, default: 'true,false'

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