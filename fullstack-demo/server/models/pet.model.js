const mongoose = require("mongoose") 

// will always need 2 attributes = the model and the timestamp
// model = model
// timestamp = created at and updated at 
const PetSchema = new mongoose.Schema({
    petName: {
        type: String, 
        required: [true, "Pet name is required"], 
        minlength: [3, "Pet name must be at least 3 characters long"]
    }, 
    hairColor: {
        type: String, 
        required: [true, "I believe you pet has hair"], 
        minlength: [3, "Hair color must be at least 3 characters long"]
    },
    age: {
        type: Number, // boolean array 
        min: [0, "Age must be a positive number"]
    },
}, {timestamp: true})

// export it at the end 
module.exports.Pet = mongoose.model("Pet", PetSchema) 