const Pet = require('../models/pet.model');

module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(allPets => {res.json({results:allPets})})
        .catch(err => res.json({err:err}))
}

module.exports.findPet = (req,res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => {res.json({results:pet})})
        .catch(err => res.json({err:err}))
}

module.exports.createNewPet = (req,res) => {
    const name = req.body.name;
    const type = req.body.type;
    const description = req.body.description;
    const skill1 = req.body.skills[0];
    const skill2 = req.body.skills[1];
    const skill3 = req.body.skills[2];
    const newPet = {name, type, description,skill1,skill2,skill3}
    Pet.create(newPet)
        .then(newPetObj => {res.json({results:newPetObj})})
        .catch(err => res.json({err:err}))
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedPet => {res.json({results:updatedPet})})
        .catch(err => res.json({err:err}))
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id:req.params.id})
        .then(deletedPet => {res.json({results:deletedPet})})
        .catch(err => res.json({err:err}))
}