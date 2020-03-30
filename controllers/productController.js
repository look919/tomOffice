const Order = require('../models/productModel');
const factory = require('./handlerFactory');

exports.createProduct = factory.createOne(Order);
exports.getAllProducts = factory.getAll(Order);
exports.getProduct = factory.getOne(Order);
exports.updateProduct = factory.updateOne(Order);
exports.deleteProduct = factory.deleteOne(Order);
