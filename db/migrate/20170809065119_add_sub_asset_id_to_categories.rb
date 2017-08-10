class AddSubAssetIdToCategories < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :sub_asset_id, :integer, :null => true
  end
end
