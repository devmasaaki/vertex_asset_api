
FactoryGirl.define do
  factory :item do
    title {Faker::Name.name}
    content {Faker::Name.name}
    file {Faker::File.file_name + '.pdf'}
    category
  end
end
