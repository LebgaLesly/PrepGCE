// model import
const  StudyBoxModel = require('../Models/studyBoxModel')


//post study box
const createStudyBox = async (req, res) => {

    try {
        const result = await StudyBoxModel.create(req.body)
        res.status(201).json(result)
    } catch (error) {
        console.error({error: 'Could not create Study Box'})
    }
}

//get study box
const getStudyBox = async (req, res) => {
    try {
        const result = await StudyBoxModel.find()
        res.status(200).json(result)
    } catch (error) {
        console.error({error: 'Could not get Study Box'})
    }
}


module.exports = {
    createStudyBox,
    getStudyBox
}
