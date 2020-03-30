const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'login already taken']
  },
  category: {
    type: String,
    enum: ['officeCabinet', 'sofa', 'desk', 'chair', 'lighting'],
    required: [true, 'category is required']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  },
  oldPrice: {
    type: Number,
    required: [true, 'old price is required']
  },
  discount: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: 'default.png'
  },
  amount: {
    type: String,
    default: 10
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
