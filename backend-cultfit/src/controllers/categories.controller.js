const express = require("express");

const Category = require("../models/categories.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(Category).post);

router.get("/", CRUD(Category).get);

router.get("/:id", CRUD(Category).getOne);

router.patch("/:id", CRUD(Category).update);

router.delete("/:id", CRUD(Category).remove);

module.exports = router;
