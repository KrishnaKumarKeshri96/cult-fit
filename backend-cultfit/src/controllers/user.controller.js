const express = require("express");

const User = require("../models/user.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(User).post);

router.get("/", CRUD(User).get);

router.get("/:id", CRUD(User).getOne);

router.patch("/:id", CRUD(User).update);

router.delete("/:id", CRUD(User).remove);

module.exports = router;
