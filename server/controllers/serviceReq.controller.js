const ServiceReq = require('../models/serviceReq.model');

// RETRIEVE all the service requests from the database
module.exports.findAllServiceReq = (req,res) => {
    ServiceReq.find()
        .then(allServiceReq => {res.json({results:allServiceReq})})
        .catch(err => res.json({err:err}))
}

// RETRIEVE a service request with matching ID
module.exports.findServiceReq = (req,res) => {
    ServiceReq.findOne({_id:req.params.id})
        .then(serviceReq => {res.json({results:serviceReq})})
        .catch(err => res.json({err:err}))
}

// CREATE a service request
module.exports.createNewServiceReq = (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;
    const zipCode = req.body.zipCode;
    const houseType = req.body.houseType;
    const description = req.body.description;
    const newServiceReq = {firstName, lastName, phone, email, zipCode, houseType, description}
    ServiceReq.create(newServiceReq)
        .then(newServiceReqObj => {res.json({results:newServiceReqObj})})
        .catch(err => res.json({err:err}))
}

// UPDATE an existing service request
module.exports.updateServiceReq = (req,res) => {
    ServiceReq.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updateServiceReq => {res.json({results:updateServiceReq})})
        .catch(err => res.json({err:err}))
}

// DELETE a service request with matching ID
module.exports.deleteServiceReq = (req,res) => {
    ServiceReq.deleteOne({_id:req.params.id})
        .then(deleteServiceReq => {res.json({results:deleteServiceReq})})
        .catch(err => res.json({err:err}))
}