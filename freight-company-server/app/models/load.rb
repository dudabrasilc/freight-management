class Load < ActiveRecord::Base
  belongs_to :driver
  belongs_to :truck

  def load_driver
    self.driver
  end

  def load_truck
    self.truck
  end

  def self.drivers
    self.all.each do |load|
      load.driver_id = load.load_driver
    end
  end

end