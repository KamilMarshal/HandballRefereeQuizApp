const express = require("express");
const { Question, QuestionTranslation, CorrectAnswer } = require("../models");
const {Op} = require("sequelize");
const router = express.Router();

router.get("/:ruleNumber", async (req, res) => {
    try {
        let { ruleNumber } = req.params;
        const lang = req.query.lang || 'pl';
        if (lang !== 'pl' && lang !== 'en')
            return res.status(404).json({ error: "Nie mamy takiego języka. Jedynie 'pl', 'en'." });
        if (ruleNumber === '19') {
            ruleNumber = 'RSZ';
        }

        const questions = await Question.findAll({
            where: {
                question_number: { [Op.like]: `${ruleNumber}.%` }
            },
            include: [
                {
                    model: QuestionTranslation,
                    where: { language_code: lang },
                    attributes: [
                        "question_text",
                        "answer_a",
                        "answer_b",
                        "answer_c",
                        "answer_d",
                        "answer_e",
                        "answer_f",
                        "answer_g",
                        "answer_h",
                    ],
                },
                {
                    model: CorrectAnswer,
                    attributes: ["correct_answers"],
                },
            ],
            order: [['id', 'ASC']],
        });

        if (!questions.length) {
            return res.status(404).json({ error: "Brak pytań dla tego przepisu." });
        }

        res.json(questions.map(q => {
            const jsonQuestion = q.toJSON();
            delete jsonQuestion.id;
            delete jsonQuestion.created_at;
            return jsonQuestion;
        }));

    } catch (error) {
        console.error("Błąd pobierania pytań z przepisu:", error);
        res.status(500).json({ error: "Wystąpił błąd serwera." });
    }
});

module.exports = router;
