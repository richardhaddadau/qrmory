const express = require("express");
const fauna = require("./faunadb_manager.cjs");
// const auth = require("../app/Http/Middleware/Authenticate");
const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  // TODO: Login to Fauna
  const loggedIn = await fauna.Login(req.body);
  res.send(loggedIn);
});

// Sign Up
router.post("/register", async (req, res) => {
  // TODO: Register with Fauna
  const registeredUser = await fauna.Register(req.body);
  res.send(registeredUser);
});

module.exports = router;
