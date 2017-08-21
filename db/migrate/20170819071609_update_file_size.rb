class UpdateFileSize < ActiveRecord::Migration[5.1]
  def change
  end

  Item.where("human_size is null").each do |item|
    item.update_filesize_0819_migration
  end
end
