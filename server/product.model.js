var mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  productDiscription: {
    type: String,
    required: true
  },
  productQuantity: {
    type: Number,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  }
})
var Product = mongoose.model('Product', ProductSchema)
module.exports = Product
