const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last:{
    type: String,
    required: true,
  },
  buy:{
    type:Number,
    required: true,
  },
  sell:{
    type: String,
    required: true,
  },
  volume:{
    type: String,
    required: true,
  },
  base_unit:{
    type: String,
    required: true
  }
    
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;