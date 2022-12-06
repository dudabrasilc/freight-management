class Driver < ActiveRecord::Base
  has_many :loads
  has_many :trucks, through: :loads


end