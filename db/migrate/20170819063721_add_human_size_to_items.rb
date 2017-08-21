class AddHumanSizeToItems < ActiveRecord::Migration[5.1]
  def change
    change_table :items do |t|
      t.string  :human_size,  limit:255
    end
  end
end
