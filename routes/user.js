const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

router.post("/create-user", async (req, res) => {
  const user_name = await models.User.create({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
  });
  res.send("User Created");
});

module.exports = router;
