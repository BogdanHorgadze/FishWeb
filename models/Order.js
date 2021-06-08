const { Schema, model } = require('mongoose')
const Product = require('./Products')

const productsSchema = new Schema({
    name: String, 
    descr: String, 
    img: String, 
    size: String, 
    price: String, 
    composition: String, 
    density: String, 
    resistance: String, 
    vapor: String, 
    treatment: String, 
    cloth: String, 
    lining: String, 
    impregnation: String, 
    selectedSize: [String], 
})

const orderSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: {
        type: [productsSchema],
        required: true
    }
})

module.exports = model('Order', orderSchema)