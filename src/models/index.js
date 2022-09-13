const mongoose = require("mongoose");
const { User } = require("./User");
const { Item } = require("./Item");

const DB_URL = process.env.MONGO;

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err ? console.log(err) : console.log("Connection Successful");
  }
);

mongoose.set("useCreateIndex", true);

module.exports = {
  User,
  Item,
};
