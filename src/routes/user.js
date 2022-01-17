const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();
const { authSchema } = require("../validator-schema");

// Model
const models = require("../models");
const controller = require("../controller/user.controller");

// All users
router.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

//
router.post("/resgiter", controller.registerUser);

module.exports = router;
