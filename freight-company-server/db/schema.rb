# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_07_080721) do

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "years_of_experience"
    t.integer "accidents"
    t.string "dl_class"
    t.string "img_url"
    t.boolean "passed_drug_test"
    t.boolean "clean_driving_record"
  end

  create_table "loads", force: :cascade do |t|
    t.string "pickup_address"
    t.string "dropoff_address"
    t.string "pickup_date"
    t.string "dropoff_date"
    t.string "pickup_time"
    t.string "dropoff_time"
    t.string "weight"
    t.string "rate"
    t.integer "driver_id"
    t.integer "truck_id"
  end

  create_table "trucks", force: :cascade do |t|
    t.string "truck_model"
    t.string "truck_color"
    t.string "license_plate"
    t.string "mileage"
    t.string "vin_number"
  end

end
