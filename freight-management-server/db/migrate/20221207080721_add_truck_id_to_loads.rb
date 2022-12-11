class AddTruckIdToLoads < ActiveRecord::Migration[6.1]
  def change
    add_column :loads, :truck_id, :integer
  end
end
