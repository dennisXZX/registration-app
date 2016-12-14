const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrantSchema = new Schema({
   name: String,
   nationality: String,
   occupation: String,
});

module.exports = mongoose.model('Registrant', registrantSchema);