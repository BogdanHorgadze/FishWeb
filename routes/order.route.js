const { Router } = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const message = require('../email/message')
const contact = require('../email/contact')
const Order = require('../models/Order')

require('dotenv').config()


let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
})

router.post('/order', async (req, res) => {
  const { userInfo , cart , totalPrice } = req.body

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

router.post('/contact-us', async(req, res) => {
  const {body: {email, text}} = req

  await transporter.sendMail(contact(email, text), function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data, 'email sent')
      res.json({ message: 'sent' })
    }
  })
})

module.exports = router