const express = require("express");
const connect = require("./configs/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/users", userController);

app.listen("8080", async () => {
  try {
    await connect();
    console.log("listening at 8080");
  } catch (err) {
    console.log(err);
  }
});
