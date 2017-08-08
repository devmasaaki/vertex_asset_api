class AddAssignedToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :assigned, :boolean, :default => true
    
    Item.find_each do |item|
      item.assigned = false
      item.assigned = !item.category.deleted unless item.category.nil?
      item.save!
    end
  
  end
end
