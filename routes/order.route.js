const { Router } = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const message = require('../email/message')
const Products = require('../models/Products')
require('dotenv').config()


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

router.post('/order', async (req, res) => {
  // const product = new Products({
  //   name: req.body.name,
  //   descr: req.body.descr,
  //   img: req.body.img,
  //   size: req.body.size,
  //   price: req.body.price,
  //   composition: req.body.composition,
  //   density: req.body.density,
  //   resistance: req.body.resistance,
  //   vapor: req.body.vapor,
  //   treatment : req.body.treatment,
  //   cloth : req.body.cloth,
  //   lining : req.body.lining,
  //   impregnation:req.body.impregnation
  // })
  // await product.save()
  // res.json({ message: 'create' })
  const { phoneNumber , cart , totalPrice } = req.body
  await transporter.sendMail(message(process.env.EMAIL, phoneNumber , cart , totalPrice), function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data, 'email sent')
      res.json({ message: 'sent' })
    }
  })
})

module.exports = router