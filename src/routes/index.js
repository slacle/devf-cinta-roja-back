const express = require("express");
const router = express.Router();
const { User, Item } = require("../models");

// ----------------- User -----------------

router.post("/create/user", (req, res) => {
  const newUser = User(req.body);
  newUser.save((err, user) => {
    !err ? res.status(201).send(user) : res.status(409).send(err);
  });
});

router.get("/get/users", (req, res) => {
  User.find((err, users) => {
    !err ? res.status(200).send(users) : res.status(409).send(err);
  });
});

router.get("/get/user/:userid", (req, res) => {
  User.findById(req.params.userid, (err, user) => {
    !err ? res.status(200).send(user) : res.status(404).send(err);
  });
});

router.put("/modify/user/:userid", (req, res) => {
  const id = req.params.userid;
  const newData = req.body;
  User.findByIdAndUpdate(id, { $set: newData }, { new: true }, (err, user) => {
    !err ? res.status(200).send(user) : res.status(409).send(err);
  });
});

router.delete("/logicdelete/user/:userid", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userid,
    { $set: { is_active: false } },
    { new: true },
    (err, user) => {
      !err ? res.status(200).send(user) : res.status(404).send(err);
    }
  );
});

router.delete("/delete/user/:userid", (req, res) => {
  User.findByIdAndDelete(req.params.userid, (err, user) => {
    !err ? res.status(200).send(user) : res.status(404).send(err);
  });
});

// ----------------- Item -----------------

router.post("/create/item", (req, res) => {
  const newItem = Item(req.body);
  newItem.save((err, item) => {
    !err ? res.status(201).send(item) : res.status(409).send(err);
  });
});

router.get("/get/items", (req, res) => {
  Item.find((err, items) => {
    !err ? res.status(200).send(items) : res.status(409).send(err);
  });
});

router.get("/get/item/:itemid", (req, res) => {
  Item.findById(req.params.itemid, (err, item) => {
    !err ? res.status(200).send(item) : res.status(404).send(err);
  });
});

router.put("/modify/item/:itemid", (req, res) => {
  const id = req.params.itemid;
  const newData = req.body;
  Item.findByIdAndUpdate(id, { $set: newData }, { new: true }, (err, item) => {
    !err ? res.status(200).send(item) : res.status(409).send(err);
  });
});

router.delete("/logicdelete/item/:itemid", (req, res) => {
  Item.findByIdAndUpdate(
    req.params.itemid,
    { $set: { is_active: false } },
    { new: true },
    (err, item) => {
      !err ? res.status(200).send(item) : res.status(404).send(err);
    }
  );
});

router.delete("/delete/item/:itemid", (req, res) => {
  Item.findByIdAndDelete(req.params.itemid, (err, item) => {
    !err ? res.status(200).send(item) : res.status(404).send(err);
  });
});

module.exports = {
  router
};
