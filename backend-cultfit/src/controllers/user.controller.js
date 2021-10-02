const express = require("express");

const { OAuth2Client } = require("google-auth-library");
const client =
  new OAuth2Client(`755998271801-nnrchkokeh4u5ekiffuuprgec1lmmjca.apps.googleusercontent.com
`);

const User = require("../models/user.model");

const CRUD = require("./crud.controller");

const router = express.Router();

router.post("/", CRUD(User).post);

router.get("/", CRUD(User).get);

router.get("/:id", CRUD(User).getOne);

router.patch("/:id", CRUD(User).update);

router.delete("/:id", CRUD(User).remove);

router.post("/api/v2/auth/google", async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
    });

    const { name, given_name, family_name, email, picture } =
      ticket.getPayload();

    const update = { name, given_name, family_name, email, picture };
    const filter = { email };
    const user = await User.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });

    return res.status(201).json(user);
  } catch (err) {
    return res.send(err);
  }
});

router.get("/me/:id", async (req, res) => {
  try {
    console.log(req.params);
    const user = await User.findById(req.params.id).lean().exec();
    console.log(user);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
