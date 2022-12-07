class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  #READ DRIVER MODEL

  get "/Drivers" do
    drivers = Driver.all
    drivers.to_json
  end

  get "/Drivers/:id" do
    driver = Driver.find(params[:id])
    driver.to_json
  end

  get "/Drivers/:id/Loads" do
    # binding.pry
    driver = Driver.find(params[:id])
    loads = driver.driver_loads
    loads.to_json
  end

  get "/Drivers/:id/Trucks" do
    # binding.pry
    driver = Driver.find(params[:id])
    trucks = driver.driver_trucks
    trucks.to_json
  end

  get "/Loads" do
    loads = Load.all
    loads.to_json
  end

  get "/Loads/:id" do
    load = Load.all.find(params[:id])
    load.load_driver.to_json
  end


end