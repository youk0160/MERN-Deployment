const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const ServiceReqSchema = new mongoose.Schema({
    firstName: {
        type: String,
        unique: true,
        uppercase: true,
        required:[true, "First name is required"],
        minlength: [3, "First Name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        unique: true,
        uppercase: true,
        required:[true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"]
    },
    phone: {
        type: String,
        required:[true, 'Phone number is required'],
        match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/, 'Please enter a valid phone number']
    },
    email: {
        type: String,
        unique: true,
        uppercase: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    zipCode:{
        type: String, 
        unique:true,
        required: [true, 'Zip Code is required'],
        match: [/^[2]\d{4}$/, 'Please enter a valid VA zip code']
    },
    houseType: {
        type: String,
        // enum: ['House', 'Townhome', 'Apt'],
        required : [true, 'Selection is required']
    },
    description: {
        type: String,
        required:[true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters long"]
    }
});

ServiceReqSchema.plugin(uniqueValidator)
const ServiceReq = mongoose.model("ServiceReq",ServiceReqSchema)

module.exports = ServiceReq;