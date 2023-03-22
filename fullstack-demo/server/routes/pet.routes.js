const PetController = require("../controllers/pet.controller") 

module.exports = app => {
    app.get("/api/pets", PetController.readAll) 
    app.get("/api/pets/:id", PetController.readOne) 
    app.post("/api/pets", PetController.createOne) 
    app.put("/api/pets/:id", PetController.updateOne) 
    app.delete("/api/pets/:id", PetController.deleteOne) 
}