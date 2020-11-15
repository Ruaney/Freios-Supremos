const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name: {type: String, unique: true, required: [true, '*Campo obrigatório']},
});

module.exports = mongoose.model('Company', CompanySchema);