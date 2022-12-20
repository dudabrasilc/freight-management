![](https://visitor-badge.glitch.me/badge?page_id=puneethreddyhc.onlineadv)

<a href="https://www.buymeacoffee.com/brasildu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="195" height="55"></a>

## Created with:  

<img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img alt="SQLite" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" /> <img alt="Ruby" src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />

# Freight Management
This application is a freight management where you have multiple functionality, persisting data from the front end with React to a back end API server built with Sinatra. With the Freight Management app you are able to persist to database the following features:

• Add a driver, truck and load;
• Assign a driver and a truck to a new load before adding it to the database;
• Remove a load;
• Mark a load as delivered.

## Walk-through video
https://www.youtube.com/watch?v=_6VdUPoxXLo

# File Structure

<img alt='file-structure' src='./readme-files/file-structure.png' />  

# Getting Started
Follow the steps below to set up both front-end and back-end code.

## freight-company-server directory

- Install gems from Gemfile

 ```bash
bundle install
  ```

- Execute database table migrations and seeding

 ```bash
 bundle exec rake db:migrate db:seed
  ```
  
- In the Driver class, there's a specified class method to seed the 'img_url' column of the drivers table with some sample pictures. It's the 'add_img' method, which you can run through a pry session with a console Rake task command in the terminal:

 ```bash
 bundle exec rake console
  ```

 ```bash
 Driver.add_img 
  ```

- Run server

 ```bash
  $ bundle exec rake server
  ```

## freight-company-client directory

- Install dependencies  

 ```bash
npm install
  ```
  
- Start development server  
  
 ```bash
npm start
  ```



# Usage

## Front-end
On the client side (from root directory './freight-management-client'), the application allows you to add, remove and manage data of a freight company, persisting the changes to the server without having to refresh the page.


## Back-end
On the server side (from root directory './freight-management-server'), you can decide to start the application without data, running only the migrations to create the database tables:

 ```bash
 bundle exec rake db:migrate
  ```

In case you want to migrate the tables with some sample data, just run the following command:

 ```bash
 bundle exec rake db:migrate db:seed
  ```

# Database tables

The database tables communicate with eachother through a many-to-many table association relationship, represented below on the ERD(Entity Relationship Diagram):

<img alt="table-association" src='./readme-files/many-to-many.png' />  


# Navigating
To navigate through the application, you will be using the navbar.

## Loads tab
If you navigate to the Loads tab on the navbar, you will have displayed a list of all loads. Each load has its own attributes and you can interact to mark it as delivered or not.
Also, you can click on the name of a load's driver to be redirected to the driver's page, where you will be able to check a driver's current loads and trucks.

![](./readme-files/loads-page.gif)

## Trucks and Drivers tabs
The trucks and drivers sections display a list of trucks and drivers. The drivers tab also allow you to click on a driver to check its loads and trucks.

![](./readme-files/trucks-drivers.gif)

## New tab
On the new tab you have a dropdown list options that takes you to different forms to add a load, driver or a truck.

![](./readme-files/add-new.gif)

# Support
For any questions related to the project's functionality, code, or usage, please reach out to:  
brasildu@gmail.com
