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

25.times do

  Load.create(
    pickup_address: "#{Faker::Address.street_address}, zip: #{Faker::Address.zip_code}, #{Faker::Address.city}, #{Faker::Address.state}",
    dropoff_address: "#{Faker::Address.street_address}, zip: #{Faker::Address.zip_code}, #{Faker::Address.city}, #{Faker::Address.state}",
    pickup_date: "1/#{rand(1..15)}/2023",
    dropoff_date: "1/#{rand(15..30)}/2023",
    pickup_time: "#{rand(1..23)}:00",
    dropoff_time: "#{rand(1..23)}:00",
    weight: "#{rand(0..48000)} lbs",
    rate: "$#{rand(1500..8000)}",
    driver_id: rand(1..10),
    truck_id: rand(1..15)
  )

end

15.times do

  Truck.create(
    truck_model: ["Volvo", "Freightliner", "Peterbilt", "International"].shuffle.first,
    truck_color: Faker::Vehicle.color,
    license_plate: Faker::Vehicle.license_plate,
    mileage: Faker::Vehicle.mileage,
    vin_number: Faker::Vehicle.vin
  )

end

puts "✅ Done seeding!"