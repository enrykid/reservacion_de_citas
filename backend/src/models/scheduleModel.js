const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
        },
        applicantName: {
            type: String,
            required: true
            },
            dateCreation:{
                type:Date,
                default: Date.now()
            },applicantID:{
                type: Number,
                required: true
            }

});

module.exports = mongoose.model('Cita', CitaSchema );