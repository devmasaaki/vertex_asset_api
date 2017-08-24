# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Asset.create!(name: "Policy Toolkit", created_at:Time.zone.now, updated_at:Time.zone.now)


# require 'factory_girl'

# 4.times do |n|
#   name = FFaker::Name.name
#   Asset.create!(
#     id:n+1,
#     name: name
#     # ,
#     # created_at: Time.zone.now,
#     # updated_at: Time.zone.now
#     )
# end


# benchmark = Benchmark.measure do
#   ActiveRecord::Base.establish_connection
#   ActiveRecord::Base.connection.tables.each do |table|
#     next if table == 'schema_migrations'

#     # MySQL and PostgreSQL
#     #ActiveRecord::Base.connection.execute("TRUNCATE #{table}")

#     # SQLite
#     # ActiveRecord::Base.connection.execute("DELETE FROM #{table}")
#   end
#   ActiveRecord::Base.transaction do
#     # FactoryGirl.create :category
#     # 4.times do
#     #   @debug = FactoryGirl.create(:asset_with_categories)
#     #   puts @debug.id
#     # end

#     # FactoryGirl.create(:category_with_subcategory)
#     # FactoryGirl.create(:category_with_items)

#     asset = Asset.create(name: 'GAPP Toolkit')
#     Category.create(name: 'Cat1', asset: asset)

#     3.times do
#       FactoryGirl.create(:asset)
#     end

#     4.times do |n|
#       @asset = Asset.find(n+1)
#       #puts @asset

#       3.times do
#         @cat = FactoryGirl.create(:category, asset: @asset)
#         #puts @cat

#         FactoryGirl.create(:item, category: @cat, asset: @asset)
#       end
#     end

#     #sub category
#     12.times do |n|
#       2.times do
#         @cat = Category.find(n+1)
#         @subcat = FactoryGirl.create(:category, parent: @cat, categorytype: 1, asset: @cat.asset)
#         #puts @subcat
        
#         2.times do
#           @pdf = FactoryGirl.create(:item, category: @subcat, asset: @cat.asset)
#           #puts @pdf
#         end
#       end
#     end
#   end
# end

# puts benchmark

# connection = ActiveRecord::Base.connection()
# connection.execute "update vertex_categories set sub_asset_id = asset_id, asset_id = null where categorytype = 1"