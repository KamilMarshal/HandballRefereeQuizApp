const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Question = sequelize.define(
    "Question",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question_number: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 10,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
  {
    tableName: "questions",
    timestamps: false,
  }
);

module.exports = Question;
