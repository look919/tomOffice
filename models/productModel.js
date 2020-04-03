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
    type: Number,
    default: 10
  },
  colors: {
    type: [String],
    required: [true, 'at least one color is required']
  },
  state: {
    type: String,
    enum: ['recommended', 'new', 'hit', 'none'],
    default: 'none'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
