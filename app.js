// Basic Server
import express from "express";
import { createUser } from "./resources/js/Helpers/FaunaDriver.js";

const app = express();

app.get("/", (req, res) => {
  // server react app
});

app.get("/api/codes", (req, res) => {
  const request = req.query;
  let result;

  createUser(request.user, request.token)
    .then((data) => {
      result = data;
    })
    .catch((err) => {
      console.log(err);
    });

  res.send(result);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server started on port 8080");
});
