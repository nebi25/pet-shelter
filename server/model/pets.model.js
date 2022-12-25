const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "The Name should be 3 chars or longer"],
        unique: true
    },
    petType: {
        type: String,
        required: [true, "Type is required"],
        minLength: [3, "The Type should be 3 chars or longer"]
    },
    petDescription: {
        type: String,
        required: [true, "Description    is required"],
        minLength: [3, "The Description should be 3 chars or longer"]
    },
    petSkill1: {
        type: String
    },
    petSkill2: {
        type: String
    },
    petSkill3: {
        type: String
    }
},{timestamps: true})

PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Pet",PetSchema);