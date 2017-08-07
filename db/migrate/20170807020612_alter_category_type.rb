class AlterCategoryType < ActiveRecord::Migration[5.1]
  def self.up
    rename_column :categories, :category_type, :categorytype
  end
  def self.down
    rename_column :categories, :categorytype, :category_type
  end 
end
