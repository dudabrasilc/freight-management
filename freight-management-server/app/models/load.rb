class Load < ActiveRecord::Base
  belongs_to :driver
  belongs_to :truck

  def load_driver
    self.driver
  end

  def load_truck
    self.truck
  end

end