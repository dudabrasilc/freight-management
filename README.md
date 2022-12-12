![](https://visitor-badge.glitch.me/badge?page_id=puneethreddyhc.onlineadv)

<a href="https://www.buymeacoffee.com/brasildu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="195" height="55"></a>

# Created with:  

<img alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img alt="SQLite" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" /> <img alt="Ruby" src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />

### Deployment:


# Freight Management
This application consists of a web API built with Sinatra and Active Record in connection with a React frontend.



# Usage

## Front-end
On the client side (from root directory './freight-management-client'), the application allows you to add, remove and manage data of a freight company.

## Back-end
On the server side (from root directory './freight-management-server'), you can decide to start the application without data, running only the migrations to create the database tables:

$ bundle exec rake db:migrate

In case you wish to migrate the tables with some sample data, just run the following command:

$ bundle exec rake db:migrate db:seed

The database tables communicate with eachother through a one-to-many table association relationship, represented below:

<img alt="table-association" src='./readme-files/table-association.png' />

# File Structure



### Navigating



### Contribute

## Support
For any questions related to the project's functionality, code, or usage, please reach out to:  
brasildu@gmail.com
