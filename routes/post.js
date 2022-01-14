const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();

const models = require("../models");

router.get("/posts", (req, res) => {
  models.Post.findAll()
    .then((post) => {
      console.log(post);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

router.post("/create-post", async (req, res) => {
  const post_name = await models.Post.create({
    id: req.body.id,
    title: req.body.title,
    user_id: req.body.user_id,
  });
  res.send("Post Created");
});

module.exports = router;
