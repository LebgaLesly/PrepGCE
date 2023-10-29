const mongoose = require('mongoose')

const studyBoxSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },

    
})

const StudyBoxModel = mongoose.model("StudyBox", studyBoxSchema)
module.exports = StudyBoxModel