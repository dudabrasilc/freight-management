class CreateLoads < ActiveRecord::Migration[6.1]
  def change
    create_table :loads do |t|
      t.string :pickup_address
      t.string :dropoff_address
      t.string :pickup_date
      t.string :dropoff_date
      t.string :pickup_time
      t.string :dropoff_time
      t.string :weight
      t.string :rate
      t.boolean :delivered
    end
  end
end
