class Driver < ActiveRecord::Base
  has_many :loads
  has_many :trucks, through: :loads

  def self.add_img
    images = ["https://i.pinimg.com/564x/65/3e/dd/653edddfbf1e2ce9adccda1a7243c362.jpg", "https://i.pinimg.com/564x/c1/d2/c7/c1d2c76c65c7e006d47f347ba1b06467.jpg", "https://i.pinimg.com/564x/08/48/83/084883ab25c84d5ecdf4cda719c2622e.jpg", "https://i.pinimg.com/564x/88/bd/82/88bd82564e1e17e4d3d97ca8909f930d.jpg", "https://i.pinimg.com/564x/b6/ab/df/b6abdfe30d34c127a6d8ae44bb225326.jpg", "https://i.pinimg.com/564x/bb/90/81/bb90815be122071bc3be3f4fcc6051e9.jpg", "https://i.pinimg.com/564x/5b/09/90/5b0990fe092ddb6e089c725ec98aa038.jpg", "https://i.pinimg.com/564x/26/29/46/2629469a7f7469727b07aab71c42ec63.jpg", "https://i.pinimg.com/564x/3e/7e/5c/3e7e5c1bb6d88377337ccb5b5cacbb7b.jpg", "https://i.pinimg.com/564x/7a/44/6c/7a446c59fa609f00593c6d2f9eb3d5d5.jpg"]

    Driver.all.each do |driver|
      driver.update(img_url: images.pop)
    end
  end

  def driver_loads
    Load.all.filter do |load|
      load.driver_id == self.id
    end
  end

  def driver_trucks
    self.trucks
  end

end