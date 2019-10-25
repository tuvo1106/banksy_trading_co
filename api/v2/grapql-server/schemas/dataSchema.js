const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: mongoose.Number,
    required: true
  }
});

const itemsSchema = new mongoose.Schema({
  collections: {
    type: {
      title: {
        type: String,
        required: true
      },
      routeName: {
        type: String,
        required: true
      },
      items: [
        {
          type: productSchema,
          required: true
        }
      ]
    }
  }
});

const Item = mongoose.model("Item", itemsSchema);
module.exports = Item;
