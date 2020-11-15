
var Company = require('../models/companys.model');


const unity_controller = require('../controllers/unity.controller');

exports.create = async (req,res, next) => {
    
    const company = new Company({
        name: req.body.name,
    })

    const doc = await company.save().catch(next);
    console.log(doc)
    res.send(doc);
};

exports.listAll = function (req,res){
  Company.find({}).then(function(company){
        res.send(company)
    })
}

exports.details = function (req,res, next){
    Company.findOne({_id: req.params.id})
    .then(function(company){
        if(!company) res.status(400).send({"message":'Company not found'})
        //pega os detalhes da unidade pelo id da empresa
        unity_controller.detailsByCompany({company},res,next,);
        // res.send(company)
    })
    
    /*Company.findOne({_id: req.params.id})
    .then(function(company){
        res.send(company)
    }).catch(next)*/
    
}

exports.update = function(req,res,next){

    Company.findByIdAndUpdate({ _id: req.params.id}, 
        req.body)
        .then(function(){
        Company.findOne({
            _id: req.params.id

        }).then(function(company){
            res.send(company)
        });
    }).catch(next);
}

//localiza as unidades antes de remover a empresa
exports.delete = async function(req,res,next){
   
    await Company.findByIdAndDelete({_id: req.params.id})
        .then(function(company){
            if(company){
                res.send(company)
            }else
                res.status(404).send({"message":'Company not found'})
        })
        .catch(next);
   
}
