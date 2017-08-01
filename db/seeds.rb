# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

4.times do |n|
  name = Faker::Name.name
  Asset.create!(
    id:n+1,
    name: name
    # ,
    # created_at: Time.zone.now,
    # updated_at: Time.zone.now
    )
end