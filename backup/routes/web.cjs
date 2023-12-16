const express = require("express");
const fauna = require("./faunadb_manager.cjs");
// const auth = require("../app/Http/Middleware/Authenticate");
const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  try {
    const loggedIn = await fauna.Login(req.body);
    res.send(loggedIn);
  } catch {
    res.status(401).send("Wrong credentials.");
  }

  return true;
});

// Sign Up
router.post("/register", async (req, res) => {
  // TODO: Verify and Validate Input
  const registeredUser = await fauna.Register(req.body);
  res.send(registeredUser);
});

// Save QR Code
// router.post()

module.exports = router;
