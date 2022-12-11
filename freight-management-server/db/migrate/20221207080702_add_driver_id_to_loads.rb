class AddDriverIdToLoads < ActiveRecord::Migration[6.1]
  def change
    add_column :loads, :driver_id, :integer
  end
end
