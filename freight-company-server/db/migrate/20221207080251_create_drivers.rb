class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :age
      t.integer :years_of_experience
      t.integer :accidents
      t.string :dl_class
      t.string :img_url
      t.boolean :passed_drug_test
      t.boolean :clean_driving_record
    end
  end
end
