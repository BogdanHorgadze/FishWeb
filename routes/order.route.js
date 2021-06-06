const { Router } = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const message = require('../email/message')
const Order = require('../models/Order')

require('dotenv').config()


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

router.post('/order', async (req, res) => {
  const { userInfo , cart , totalPrice } = req.body
  console.log("🚀 ~ file: order.route.js ~ line 20 ~ router.post ~ totalPrice", totalPrice)
  console.log("🚀 ~ file: order.route.js ~ line 20 ~ router.post ~ cart", cart)
  console.log("🚀 ~ file: order.route.js ~ line 20 ~ router.post ~ userInfo", userInfo)

  const order = new Order({
    ...userInfo,
    products: [...cart]
  })
  await order.save()

  await transporter.sendMail(message(process.env.EMAIL, userInfo.phone , cart , totalPrice), function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data, 'email sent')
      res.json({ message: 'sent' })
    }
  })
})

module.exports = router