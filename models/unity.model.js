const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//A unidade armazena a empresa que está associada para consultas futuras
let UnitySchema = new Schema({
    name: {type: String, required: true, max: 100, unique:true},
    companyID:{type:Schema.Types.ObjectId, ref: 'Company', required: true}
    //activeID: {type: Schema.Types.ObjectId, ref: 'Active'},
});

module.exports = mongoose.model('Unity', UnitySchema);