const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', require('./routes/order.route'))
app.use('/api', require('./routes/products.route'))

async function start(){
  try{
      await mongoose.connect(`mongodb+srv://bogdan:${process.env.DBPASSWORD}@cluster0.iehmb.mongodb.net/fishing?retryWrites=true&w=majority`,{
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
      })
      app.listen(PORT, ()=> {
          console.log(`server running on ${PORT}`)
      })
  }catch(e){
      console.log(e)
      process.exit(1)
  }
}

start()