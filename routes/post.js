const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();

//Models
const models = require("../models");

// Get all posts
router.get("/posts", (req, res) => {
  models.Post.findAll()
    .then((post) => {
      console.log(post);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

// Create post
router.post("/create-post", async (req, res) => {
  const post_name = await models.Post.create({
    id: req.body.id,
    title: req.body.title,
    user_id: req.body.user_id,
  })
    .then((post) => res.redirect("/posts"))
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;
