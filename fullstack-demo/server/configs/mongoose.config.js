// import mongoose 
const mongoose = require("mongoose"); 

// connect to the db 
mongoose.connect("mongodb://localhost/pets_db", {
    userNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("Established a connection to the database")) 
    .catch(() => console.log("Something went wrong when connecting to the database", err)); 