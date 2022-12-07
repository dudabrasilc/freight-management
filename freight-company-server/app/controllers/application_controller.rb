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

  get "/Trucks" do
    trucks = Truck.all
    trucks.to_json
  end

    # get "/Loads/:id/Driver" do
  #   load = Load.all.find(params[:id])
  #   load_driver = load.driver
  #   load_driver.to_json
  # end

  # get "/Trucks" do
  #   trucks = Truck.all
  #   trucks.to_json
  # end


  # CREATE DRIVER AND LOAD MODELS

  post '/Drivers' do
    # binding.pry
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

  delete '/Drivers/:id' do
    driver = Driver.find(params[:id])
    driver.destroy
    driver.to_json
  end

  post '/Loads' do
    # binding.pry
    load = Load.create(
      pickup_address: params[:pickup_address],
      dropoff_address: params[:dropoff_address],
      pickup_date: params[:pickup_date],
      dropoff_date: params[:dropoff_date],
      pickup_time: params[:pickup_time],
      dropoff_time: params[:dropoff_time],
      weight: params[:weight],
      rate: params[:rate]
    )
    load.to_json
  end

  # UPDATE DRIVER

  # patch '/Drivers/:id' do
  #   driver = Driver.find(params[:id])
  #   driver.update(
  #     clean_driving_record: params[:clean_driving_record]
  #   )
  #   driver.to_json
  # end

  # patch '/Drivers/:id' do
  #   binding.pry
  #   driver = Driver.find(params[:id])
  #   driver.update(
  #     passed_drug_test: params[:passed_drug_test]
  #   )
  #   driver.to_json
  # end


end