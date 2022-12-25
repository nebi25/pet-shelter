const PetSchema = require('../controller/pets.controller')

module.exports = app => {
    app.get('/api/pets',PetSchema.showAllPets)
    app.post('/api/pets',PetSchema.createPet)
    app.get('/api/pets/:id',PetSchema.getOnePet)
    app.put('/api/pets/:id',PetSchema.editPet)
    app.delete('/api/pets/:id',PetSchema.deletePet)
}