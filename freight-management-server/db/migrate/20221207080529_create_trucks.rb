class CreateTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :trucks do |t|
      t.string :truck_model
      t.string :truck_color
      t.string :license_plate
      t.string :mileage
      t.string :vin_number
    end
  end
end
