class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title
      t.text :content
      t.string :file
      t.string :file_type, :default => "PDF"
      t.belongs_to :category, index: true, foreign_key: true
      t.integer :sort, default: 0
      t.boolean :deleted, default: false

      t.timestamps
    end
  end
end
