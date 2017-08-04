class CreateAssets < ActiveRecord::Migration[5.0]
  def change
    create_table :assets do |t|
      t.string :name, limit: 255, null: false

      t.timestamps
    end
  end
end
