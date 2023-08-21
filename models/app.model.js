const mongoose = require('mongoose')

const appScehma = new mongoose.Schema({
    name : {type : String, required : true},
    image : {type : String, required : true},
    specialization : {type : String, required : true, enum :["Cardiologist", 'Dermatologist', 'Pediatrician', 'Psychiatrist' ]},
    experience : {type : Number, required : true},
    location : {type : String, required : true},
	date : {type : Date, required : true},
	slots : {type : Number, required : true},
	fee : {type : Number, required : true}
})

const AppModel = mongoose.model('appointment', appScehma)

module.exports = { AppModel}