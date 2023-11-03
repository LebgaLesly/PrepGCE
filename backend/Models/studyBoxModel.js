const mongoose = require('mongoose')

const studyBoxSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    class1: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },

    
})

const StudyBoxModel = mongoose.model("StudyBox", studyBoxSchema)
module.exports = StudyBoxModel