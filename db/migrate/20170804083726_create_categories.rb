class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :name, limit: 255, null: false
      t.integer :sort
      t.boolean :deleted, :default => false
      t.belongs_to :asset, index: true, foreign_key: true
      t.integer :item_cnt
      t.integer :category_type, :default => 0
      t.integer :parent_id
      
      t.timestamps
    end
  end
end
