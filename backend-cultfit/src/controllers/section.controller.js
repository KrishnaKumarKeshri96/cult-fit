const express = require("express");

const Section = require("../models/section.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(Section).post);

router.get("/", CRUD(Section).get);

router.get("/:id", CRUD(Section).getOne);

router.patch("/:id", CRUD(Section).update);

router.delete("/:id", CRUD(Section).remove);

module.exports = router;
