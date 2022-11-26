const express = require("express");
const fauna = require("./faunadb_manager.cjs");
// const auth = require("../app/Http/Middleware/Authenticate");
const router = express.Router();
const fauna = require("./faunadb_manager.cjs");

// Login
router.post("/login", (req, res) => {
  try {
    fauna.Login(req.body);
    // Login to Fauna
  } catch (e) {
    res.status(400).send();
  }
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
