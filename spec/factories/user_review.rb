require 'faker'

FactoryBot.define do
  factory :user_review do
    comment  { Faker::FamousLastWords.last_words }
    rating   { Faker::Number.between(1, 10) }
    created_at { Faker::Date.between(10.days.ago, Date.today)}
    updated_at { Faker::Date.between(5.days.ago, Date.today)}
    reviewer_id { Faker::Number.between(11,20) }
    user_profile	
  end
end