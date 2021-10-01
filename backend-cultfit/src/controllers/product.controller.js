const express = require("express");

const Product = require("../models/products.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(Product).post);

router.get("/", CRUD(Product).get);

router.get("/:id", CRUD(Product).getOne);

router.patch("/:id", CRUD(Product).update);

router.delete("/:id", CRUD(Product).remove);

module.exports = router;
