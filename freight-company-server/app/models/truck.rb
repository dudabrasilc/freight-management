class Truck < ActiveRecord::Base
  has_many :loads
  has_many :drivers, through: :loads

end