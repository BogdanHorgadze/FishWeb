const { Router } = require('express')
const router = Router()
const Products = require('../models/Products')

router.get('/products', async (req, res) => {
  try {
    const products = await Products.find()
    res.json(products)
  } catch (e) {
    console.log(e)
  }

})

router.get('/products/:id', async (req, res) => {
  try {
    const products = await Products.findById(req.params.id)
    if (products) {
      res.json(products)
    }
  } catch (e) {
    console.log(e)
  }

})


module.exports = router