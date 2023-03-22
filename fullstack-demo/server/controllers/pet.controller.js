const { Pet } = require("./../models/pet.model") 

// test
module.exports.message = (req, res) => {
res.json("message from backend") 
}

// create 
module.exports.createOne = (req, res) => {
    Pet.create(req.body) 
        .then(response => res.json(response)) 
        .catch(err => res.json(err)) 
}

// read one 
module.exports.readOne = (req, res) => {
    const id = req.params.id // the name of the prams will depend on the routes 
    Pet.findOne({ _id: id }) // _id is from mongoDB and id is from the params id
        .then(response => res.json(response)) 
        .catch(err => res.json(err)) 
}

// read all 
module.exports.readAll = (req, res) => {
    Pet.find()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// update = get one + create
module.exports.updateOne = (req, res) => {
    const id = req.params.id
    Pet.findOneAndUpdate(
        { _id: id}, // filter out the pet with the id 
        req.body, // the data to be updated 
        { new: true, runValidators: true } // options 
    )
        .then(response => res.json(response)) 
        .catch(err => res.json(err)) 
}

// delete 
module.exports.deleteOne = (req, res) => {
    Pet.deleteOne({ _id: req.params.id }) 
        .then(response => res.json(response)) 
        .catch(err => res.json(err)) 
}