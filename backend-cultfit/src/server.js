const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const userController = require("./controllers/user.controller");

const brandController = require("./controllers/brand.controller");

const sectionController = require("./controllers/section.controller");

const categoryController = require("./controllers/categories.controller");

const productController = require("./controllers/product.controller");

app.get("/", async (req, res) => {
  try {
    return res.send("Hello Welcome ");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

app.use("/users", userController);

app.use("/brand", brandController);

app.use("/section", sectionController);

app.use("/category", categoryController);

app.use("/product", productController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening at 8080");
    console.log(process.env.PORT);
  } catch (err) {
    console.log(err);
  }
});
