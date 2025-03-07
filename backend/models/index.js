const sequelize = require('../config/db'); // Połączenie do bazy
const User = require('./user');
const Question = require('./questions');
const QuestionTranslation = require('./question_translations');
const CorrectAnswer = require('./correct_answers');


Question.hasMany(QuestionTranslation, { foreignKey: 'question_id'});
QuestionTranslation.belongsTo(Question, { foreignKey: 'question_id'});


Question.hasMany(CorrectAnswer, { foreignKey: 'question_id' })
CorrectAnswer.belongsTo(Question, {foreignKey: 'question_id'})

module.exports = {User, Question, QuestionTranslation, CorrectAnswer, sequelize};
