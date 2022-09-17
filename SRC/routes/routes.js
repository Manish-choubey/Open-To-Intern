const express = require('express');
const router = express.Router();

const CollegeController = require('../Controllers/CollegeController')
const InternController = require('../Controllers/InternController')



router.post('/function/college',CollegeController.creatcollege)
router.post('/function/intern',InternController.createIntern)
router.get('/function/collegeDetails',CollegeController.collegeDetails)







module.exports = router;

