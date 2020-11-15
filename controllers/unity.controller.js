var Unity = require('../models/unity.model');

var Company = require('../models/companys.model');
//quando cria uma unidade, ela é obrigatoriamente associada a uma company
exports.create = async (req,res, next) => {     
   
    const unity = new Unity({
        name: req.body.name,
        companyID: req.body.companyID,
    })
    //valida companyID
    const temp = await Company.findOne({_id:req.body.companyID});
    if(!temp){
        res.status(404).send('companyID inválido');
    }

    const doc = await unity.save().catch(next);
    res.send(doc)   

};


exports.update = function(req,res,next){
    console.log(req.body)
    Unity.findByIdAndUpdate({ _id: req.params.id},req.body)
        .then(function(){
            Unity.findOne({
                _id: req.params.id
        }).then(function(unity){
            res.send(unity)
        });
    }).catch(next);
}

//Deleta apenas unidades individualmente
exports.delete = async function(req,res,next){
    await Unity.findByIdAndDelete({
        _id: req.params.id
    }).then(function(unity){
        if(unity)
            res.send(unity);
        else 
            res.status(404).send('Unity not found')
    }).catch(next);
}

exports.listAll = function (req,res){
    Unity.find({}).then(function(unity){
        res.send(unity)
    })
}

exports.details = function (req,res, next){
    Unity.findOne({_id: req.params.id}).then(function(unity){
        res.send(unity)
    }).catch(next)
}

exports.detailsByCompany= function (req,res,next) {
   // console.log(req);
   
Unity.find({companyID: req.company._id}).then(function(unity){
        if(!unity){
            res.send([req.company,{"message":"Nenhuma unidade associada."}])
        }else{
            res.send([req.company,{"Unidades":unity}]) 
        }
            
   })
      
   //console.log(unity)
  /* unitys.forEach(function (){
      
        if(unitys.companyID == req.comany._id) {
            unitysNew.add(unitys)
            console.log(true)
        }   

        i++;
   });*/
   //if(unitysNew.length == 0){
    //   res.status(400).send(company,{"message": "Unitys not found"})
  // }
  // res.send([req.company,unity])
}
