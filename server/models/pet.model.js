const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        uppercase: true,
        required:[true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required:[true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required:[true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
})

PetSchema.plugin(uniqueValidator)
const Pet = mongoose.model("Pet",PetSchema)

module.exports = Pet;