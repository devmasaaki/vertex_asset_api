class AddTagsItems < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.string  :tags,  limit:255
    end
  end
end
