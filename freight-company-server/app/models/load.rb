class Load < ActiveRecord::Base
  belongs_to :driver
  belongs_to :truck

end