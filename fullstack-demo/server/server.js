// import all dependencies 
const express = require("express")
const cors = require("cors") 
const app = express() 

// configt mongoose
require("./configs/mongoose.config") 

// epxress cofig for post 
app.use(cors()) 
app.use(express.json(), express.urlencoded({extended: true})); 

// routes
require("./routes/pet.routes")(app) 

// listen for the port
app.listen(8000, () => console.log("The server is all fired up on port 8000")); 