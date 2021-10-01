const express = require("express");
const connect = require("./configs/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

const brandController = require("./controllers/brand.controller");

const sectionController = require("./controllers/section.controller");

const categoryController = require("./controllers/categories.controller");

app.use("/users", userController);

app.use("/brand", brandController);

app.use("/section", sectionController);

app.use("/category", categoryController);

app.listen("8080", async () => {
  try {
    await connect();
    console.log("listening at 8080");
  } catch (err) {
    console.log(err);
  }
});
