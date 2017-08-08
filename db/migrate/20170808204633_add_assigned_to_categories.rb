class AddAssignedToCategories < ActiveRecord::Migration[5.1]
  def change
    add_column :categories, :assigned, :boolean, :default => true
    
    Category.find_each do |category|
      category.assigned = true
      category.assigned = !category.parent.deleted unless category.parent.nil?
      category.save!
    end
  
  end


end
