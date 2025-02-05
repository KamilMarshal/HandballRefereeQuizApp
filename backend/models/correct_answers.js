const {DataTypes, Model, BOOLEAN} = require("sequelize");
const sequelize = require("../config/db");

const CorrectAnswer = sequelize.define(
    "correctAnswers",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: sequelize.model("Question"),
            },
        },
        language_code: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 2,
        },
        correct_answers:
            {
                type: DataTypes.ARRAY(DataTypes.BOOLEAN),
                allowNull: false,
            }
    },
  {
    tableName: "correct_answers",
    timestamps: false,
  }
);

module.exports = CorrectAnswer;
