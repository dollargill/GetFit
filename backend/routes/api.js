const express = require('express');
const router = express.Router();
const { getDietPlans, getExerciseTips } = require('../controllers/apiController');

router.get('/dietplans', getDietPlans);
router.get('/exercisetips', getExerciseTips);

module.exports = router;
