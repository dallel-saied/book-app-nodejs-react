//1. Import express
const express = require("express")
require("./src/db/mongoose")
const bookRouter = require("./routes/bookRouter")
const routes = require('./routes');
const cors = require("cors")

//2 Call express function and save it in app
const app = express()
app.use(cors())

app.use(express.json())
app.use(express.static('client/build'));
app.use(bookRouter)
app.use(routes);

//3. Define a port
const port = process.env.PORT || 4000

//4. Listen to the port
app.listen(port, () => {
    console.log(`Server is up on port: 4000`)
})