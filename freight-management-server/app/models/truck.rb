class Truck < ActiveRecord::Base
  has_many :loads
  has_many :drivers, through: :loads

  def truck_loads
    Load.all.filter do |load|
      load.truck_id == self.id
    end
  end
  
end