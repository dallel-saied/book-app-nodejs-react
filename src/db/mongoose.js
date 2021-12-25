const mongoose = require("mongoose")
// .env
require("dotenv").config()

// const MONGODB_URL = `mongodb://${process.env.DATABASE_HOST}:
// ${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

const MONGODB_URL = "mongodb+srv://dallel:148632da@cluster0.tg8x5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

