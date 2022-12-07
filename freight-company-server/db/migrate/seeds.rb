puts "🌱 Seeding spices..."

10.times do

  Driver.create(
    name: "#{Faker::Name.male_first_name} #{Faker::Name.last_name}",
    age: rand(25..65),
    years_of_experience: rand(0..20),
    accidents: rand(0..5),
    dl_class: ("A".."C").to_a.sample,
    passed_drug_test: [true, false].shuffle.first,
    clean_driving_record: [true, false].shuffle.first
  )

end