var Active = require('../models/active.model');

var fs = require('fs'); 
var path = require('path'); 
//nao está funcionando
exports.create = async (req,res, next) => {
    console.log(req.body)
    const image = req.body.img 
    const active = new Active({
        name: req.body.name,
        image,
        details: req.body.details,
        model: req.body.model,
        responsavelID: req.body.responsavelID,
        unityID: req.body.unityID,
        status: req.body.status
        //unidade: req.body.unity
    })
    const doc = await active.save().then(function(){
        if(!doc){
            res.send({"message": "Nao foi possivel cadastrar"})
        }
        res.send(doc);
    }).catch(next);
 
    
};


exports.update = function(req,res,next){
    Company.findByIdAndUpdate({ _id: req.params.id}, 
        req.body).then(function(){
        Company.findOne({
            _id: req.params.id
        }).then(function(company){
            res.send(company)
        });
    }).catch(next);
}

exports.delete = async function(req,res,next){
    await Company.findByIdAndRemove({
        _id: req.params.id
    }).then(function(company){
        console.log("Company removed: ");
        res.send(company);
    }).catch(next);
}

/**
 * exports.listAll = function (req,res){
  Company.find({}).then(function(company){
        res.send(company)
    })
}

exports.details = function (req,res, next){
    Company.findOne({_id: req.params.id}).then(function(company){
        res.send(company)
    }).catch(next)
}
 */