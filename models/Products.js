const { Schema, model } = require('mongoose')

const productsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  descr: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  composition: {
    type: String,
    required: true
  },
  density: {
    type: String,
    required: true
  },
  resistance: {
    type: String,
    required: true
  },
  vapor: {
    type: String,
    required: true
  },
  treatment: {
    type: String
  },
  cloth: {
    type: String
  },
  lining: {
    type: String
  },
  impregnation : {
    type: String
  },
  selectedSize : [String]
})

module.exports = model('Products', productsSchema)