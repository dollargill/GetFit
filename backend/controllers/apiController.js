const DietPlan = require('../models/DietPlan');
const ExerciseTip = require('../models/ExerciseTip');

const getDietPlans = async (req, res) => {
    try {
        const dietPlans = await DietPlan.find();
        res.json(dietPlans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getExerciseTips = async (req, res) => {
    try {
        const exerciseTips = await ExerciseTip.find();
        res.json(exerciseTips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getDietPlans,
    getExerciseTips
};
