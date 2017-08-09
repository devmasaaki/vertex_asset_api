class AddColumnAssetIdToItems < ActiveRecord::Migration[5.0]
  def change
    change_table :items do |t|
      t.references :asset, :null => true
    end
  end
end
