const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userController = require("./controllers/user.controller");

const brandController = require("./controllers/brand.controller");

const sectionController = require("./controllers/section.controller");

const categoryController = require("./controllers/categories.controller");

const productController = require("./controllers/product.controller");

app.use("/users", userController);

app.use("/brand", brandController);

app.use("/section", sectionController);

app.use("/category", categoryController);

app.use("/product", productController);

app.listen("8080", async () => {
  try {
    await connect();
    console.log("listening at 8080");
    console.log(process.env.PORT);
  } catch (err) {
    console.log(err);
  }
});
