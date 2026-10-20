require('dotenv').config();
const express = require("express");
const {sequelize} = require("../DB/connection.js");
const userRouter = require("./app/user/user.route.js");
const postRouter = require("./app/post/post.route.js");
const commentRouter=require('./app/comment/comment.route.js')
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);
sequelize
  .sync()
  .then(() => {
    console.log("Database tables created");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database error:", err);
  });