const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

// const User = require("./models/user");

const models = require("./models");

const app = express();

app.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
