const express = require("express");

const Brand = require("../models/brands.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(Brand).post);

router.get("/", CRUD(Brand).get);

router.get("/:id", CRUD(Brand).getOne);

router.patch("/:id", CRUD(Brand).update);

router.delete("/:id", CRUD(Brand).remove);

module.exports = router;
