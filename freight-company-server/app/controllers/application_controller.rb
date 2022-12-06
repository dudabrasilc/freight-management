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


end