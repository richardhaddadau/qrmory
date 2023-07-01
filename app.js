// Basic Server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to COS server");
});

app.get("/cors", (req, res) => {
  res.send("CORS enabled");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
