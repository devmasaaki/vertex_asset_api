FactoryGirl.define do
  factory :asset do
    name  {Faker::Food.dish}

    # factory :asset_with_categories do
    #   transient do
    #     categories_count 5
    #   end

    #   after(:create) do |asset, evaluator|
    #     create_list(:category, evaluator.categories_count, asset: asset)
    #   end
    # end
  end
end
