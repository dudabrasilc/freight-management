class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/Drivers" do
    drivers = Driver.all
    drivers.to_json
  end

  get "/Drivers/:id" do
    driver = Driver.find(params[:id])
    driver.to_json
  end

  get "/Drivers/:id/Loads" do
    driver = Driver.find(params[:id])
    loads = driver.driver_loads
    loads.to_json
  end

  get "/Drivers/:id/Trucks" do
    driver = Driver.find(params[:id])
    trucks = driver.driver_trucks
    trucks.to_json
  end

  post '/Drivers' do
    driver = Driver.create(
      name: params[:name],
      age: params[:age],
      years_of_experience: params[:years_of_experience],
      dl_class: params[:dl_class],
      accidents: params[:accidents],
      img_url: params[:img_url]
    )
    driver.to_json
  end

  get "/Loads" do
    loads = Load.all
    loads.to_json
  end

  get "/Loads/:id" do
    load = Load.all.find(params[:id])
    load.load_driver.to_json
  end

  post '/Loads' do
    load = Load.create(
      pickup_address: params[:pickup_address],
      dropoff_address: params[:dropoff_address],
      pickup_date: params[:pickup_date],
      dropoff_date: params[:dropoff_date],
      pickup_time: params[:pickup_time],
      dropoff_time: params[:dropoff_time],
      weight: params[:weight],
      rate: params[:rate],
      driver_id: params[:driver_id],
      truck_id: params[:truck_id]
    )
    load.to_json
  end

  delete '/Loads/:id' do
    driver = Load.find(params[:id])
    driver.destroy
    driver.to_json
  end

  patch '/Loads/:id' do
    load = Load.find(params[:id])
    load.update(
      delivered: params[:delivered]
    )
    load.to_json
  end

  get "/Trucks" do
    trucks = Truck.all
    trucks.to_json
  end

  post '/Trucks' do
    truck = Truck.create(
      truck_model: params[:truck_model],
      truck_color: params[:truck_color],
      license_plate: params[:license_plate],
      mileage: params[:mileage],
      vin_number: params[:vin_number]
    )
    truck.to_json
  end

end