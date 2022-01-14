const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

// const User = require("./models/user");

const models = require("./models");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      console.log(user);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

app.get("/posts", (req, res) => {
  models.Post.findAll()
    .then((post) => {
      console.log(post);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

app.post("/create-user", async (req, res) => {
  const user_name = await models.User.create({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
  });
  res.send("Done");
});

app.post("/create-post", async (req, res) => {
  const post_name = await models.Post.create({
    id: req.body.id,
    title: req.body.title,
    // user_id: req.body.user_id,
  });
  res.send("Done");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
