// create a function that uses axios to make an api call to mailerlite.com

const axios = require("axios");

const mailerlite = axios.create({
  baseURL: "https://api.mailerlite.com/v2",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": process.env.MAILERLITE_API_KEY,
  },
});
