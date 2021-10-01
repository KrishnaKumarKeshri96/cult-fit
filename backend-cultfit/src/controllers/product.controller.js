const express = require("express");

const Product = require("../models/products.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(Product).post);

router.get("/", CRUD(Product).get);

router.get("/productMain", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    const newProduct = [];
    for (let i = 0; i < 10; i = i + 2) {
      newProduct.push(product[i]);
    }
    return res.send(newProduct);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/productMain/:category", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    const products = product.filter((e) => {
      return (
        e.category === req.params.category || e.type === req.params.category
      );
    });

    return res.send(products);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id", CRUD(Product).getOne);

router.patch("/:id", CRUD(Product).update);

router.delete("/:id", CRUD(Product).remove);

module.exports = router;
