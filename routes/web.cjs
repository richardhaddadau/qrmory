const express = require("express");
const { faunaDriver } = require("./faunadb_manager.js");
// const auth = require("../app/Http/Middleware/Authenticate");
const router = express.Router();

// Current
router.get("/user/current", async (req, res) => {
  // TODO: Verify and Validate Input
  const currentUser = await faunaDriver.GetCurrent();
  res.send(currentUser);
});

// Login
router.post("/user/login", async (req, res) => {
  await faunaDriver.Login(req.body).then((result) => {
    if (result === false) {
      res.status(401).send("Login Failed.");
    } else {
      res.send("Login Successful.");
      localStorage.setItem("user", result);
    }
  });
});

// Sign Up
router.post("/user/register", async (req, res) => {
  // TODO: Verify and Validate Input
  const registeredUser = await faunaDriver.Register(req.body);
  res.send(registeredUser);
});

// Save QR Code
// router.post()

module.exports = router;
