const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    activeID: {type: Schema.Types.ObjectId, ref: 'Active'},

});

module.exports = mongoose.model('User', UserSchema);