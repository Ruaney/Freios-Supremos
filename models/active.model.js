const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActiveSchema = new Schema({
    name: {type: String, required: true, max: 100},
    image: {type:String},
    details:{type: String, required: [true, '*Campo obrigatório']},
    model:{type: String, required: [true, '*Campo obrigatório']},
    responsavelID: {type: Schema.Types.ObjectId, ref: 'User'},
    unityID: {type: Schema.Types.ObjectId, ref: 'Unity'},
    status: {type: String, required: true, enum: ['Disponivel', 'Manutenção', 'Desativado'], default: 'Disponivel'},

});

module.exports = mongoose.model('Active', ActiveSchema);