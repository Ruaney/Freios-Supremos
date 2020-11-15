var Users = require('../models/users.model');

exports.create = async (req,res, next) => {
   
    const user = new Users({
        name: req.body.name
        //unidade: req.body.unity
    })
    const doc = await user.save().catch(next);
    res.send(doc)
};

exports.update = function(req,res,next){
    Users.findByIdAndUpdate({ _id: req.params.id}, 
        req.body).then(function(){
            Users.findOne({
            _id: req.params.id
        }).then(function(user){
            res.send(user)
        });
    }).catch(next);
}

exports.delete = async function(req,res,next){
    await Users.findByIdAndRemove({
        _id: req.params.id
    }).then(function(user){
        console.log("Usuario removed: ");
        res.send(user);
    }).catch(next);
}

 exports.listAll = function (req,res){
    Users.find({}).then(function(active){
        res.send(active)
    })
}
/**
 *
exports.details = function (req,res, next){
    Company.findOne({_id: req.params.id}).then(function(company){
        res.send(company)
    }).catch(next)
}
 * 
 */