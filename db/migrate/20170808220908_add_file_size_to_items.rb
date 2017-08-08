class AddFileSizeToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :file_size, :integer, :null => true, :default => 0
  end
end
