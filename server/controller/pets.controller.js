const PetSchema = require('../model/pets.model');

module.exports.showAllPets = (request, response) => {
    PetSchema.find()
    .then((results) => response.json(results))
    .catch((error) => 
        response.status(400).json({error})
)}

module.exports.createPet = (request, response) => {
    PetSchema.create(request.body)
    .then((results) => response.json(results))
    .catch((error) => response.status(400).json({error}))
}

module.exports.getOnePet = (request, response) => {
    PetSchema.findOne({_id: request.params.id})
    .then((results) => {
        response.json(results)
    })
    .catch((error) => 
        response.status(400).json({error})
)}


module.exports.editPet = (request, response) => {
    PetSchema.updateOne({_id: request.params.id}, request.body, {new: true})
    .then((results) => {
        response.json(results)
    })
    .catch((error) => 
        response.status(400).json({error})
)}

module.exports.deletePet = (request, response) => {
    PetSchema.deleteOne({_id: request.params.id})
    .then((results) => response.json(results))
    .catch((error) => 
        response.status(400).json({error})
)}