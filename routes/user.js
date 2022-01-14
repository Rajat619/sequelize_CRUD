const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();

// Model
const models = require("../models");

// All users
router.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

//  Create User
router.post("/create-user", async (req, res) => {
  const user_name = await models.User.create({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
  })
    .then((user) => res.redirect("/"))
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;
