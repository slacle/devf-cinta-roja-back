const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    photo: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      unique: true,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = {
  Item
};
