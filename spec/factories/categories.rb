FactoryGirl.define do
  factory :category do
    name {Faker::University.name}
    sort 1
    # parent_id 1

    # factory :category_with_subcategory do
    #   transient do
    #     subcategories_count 3
    #   end

    #   after(:create) do |category, evaluator|
    #     create_list(:category, evaluator.subcategories_count, parent: category)
    #   end
    # end

    # factory :category_with_items do
    #   transient do
    #     items_count 3
    #   end

    #   after(:create) do |category, evaluator|
    #     create_list(:item, evaluator.items_count, category: category)
    #   end
    # end



  end
end
