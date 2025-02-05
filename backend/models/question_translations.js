const {DataTypes, Model} = require("sequelize");
const sequelize = require("../config/db");

const QuestionTranslation = sequelize.define(
    "QuestionTranslation",
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
        question_text: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        answer_a: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        answer_b: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        answer_c: {
            type: DataTypes.TEXT,
        },
        answer_d: {
            type: DataTypes.TEXT,
        },
        answer_e: {
            type: DataTypes.TEXT,
        },
        answer_f: {
            type: DataTypes.TEXT,
        },
        answer_g: {
            type: DataTypes.TEXT,
        },
        answer_h: {
            type: DataTypes.TEXT,
        },
    },
  {
    tableName: "question_translations",
    timestamps: false,
  }
);

module.exports = QuestionTranslation;
