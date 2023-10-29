const express = require('express')
const router = express.Router()


//import controllers
const {
    createStudyBox,
    getStudyBox
} = require('../Controllers/studyBoxControllers')




//Get studybox
router.get('/studybox', getStudyBox)


//post studybox
router.post('/studybox', createStudyBox)


//delete studybox
router.delete('/studybox')



module.exports = router