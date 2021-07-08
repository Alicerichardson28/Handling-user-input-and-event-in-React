import axios from 'axios';

//create is allow you to create customize 
//pre customize axios, and then import to app.js, cause we don't want this axios in app .js
//the purpose for more clean code 

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_MY_API_KEY}`
        }
});