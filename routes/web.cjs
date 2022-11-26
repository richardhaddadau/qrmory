const express = require("express");
// const auth = require("../app/Http/Middleware/Authenticate");
const router = express.Router();

const faunadb = require("faunadb");
const q = faunadb.query;

const secret =

// Login
router.post("/login", (req, res) => {
  res.send("hello");
  // try {
  //   // Login to Fauna
  // } catch (e) {
  //   res.status(400).send();
  // }
});

// Sign Up
router.post("/register", async (req, res) => {
  res.send(req);
  // Register with Fauna
  // try {
  //   // Login to Fauna
  // } catch (e) {
  //   res.status(400).send();
  // }
});

module.exports = router;
