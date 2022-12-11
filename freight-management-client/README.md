![](https://visitor-badge.glitch.me/badge?page_id=puneethreddyhc.onlineadv)

<a href="https://www.buymeacoffee.com/dudabrasilc" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="195" height="55"></a>

Created with:  

<img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E" /> <img alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=flat-square&logo=css3&logoColor=white" /> <img alt="React" src="https://img.shields.io/badge/-ReactJs-61DAFB?style=flat-square&logo=react" />

# Arts By All

Arts By All is a single page web application created with React. It is an open source art collection where you can explore and upload arts, contributing to the collection.

## Dependencies
-Packages:
$ npm install

-JSON server:
$ npm install -g json-server

Make sure to have the script in package.json file --> "server": "json-server --watch db.json --port 3004"
Then type on terminal:
$ npm run server


-React Router:
$ npm install react-router-dom@5


## Usage
This project utilizes client-side routing, making the user able to interact with links to change URLs and have the UI updated. Along with it, a form is made avaible to the user through the Contribute link, in order to upload arts that will be added to the art collection
  
For a walkthrough of the project web page, check out the YouTube video:
https://www.youtube.com/watch?v=CzPgnsIEIQo
  
### Navigating
There are 4 navbar links on the top right of the page which the user can interact with to render different types of content. Once the web page is loaded, the user will be able to see:  

![](./gifs/home.gif)

### Arts collection
Once the user clicks on the Arts link, an art collection is rendered. If the user clicks on top of an art card, more details about the art will be displayed:

![](./gifs/arts.gif) 

### Contribute
The contribute link renders a form which the user can upload an art filling up the requested information and submit:  

![](./gifs/contribute.gif)
Once the art is submitted, the user is able to check the art clicking on the Arts link that takes to the art collection.  

## Support
For any questions related to the project's functionality, code, or usage, please reach out to:  
brasildu@gmail.com
