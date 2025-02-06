const express = require("express");
const {Question, QuestionTranslation, CorrectAnswer} = require("../models");
const {literal} = require("../config/db");

const router = express.Router();
router.get("/random-one", async (req, res) => {
    try {
        const {lang} = req.query; // Pobranie języka z query params (pl/en)

        if (!lang || (lang !== "pl" && lang !== "en")) {
            return res.status(400).json({error: "Niepoprawny język, użyj 'pl' lub 'en'."});
        }

        const randomQuestion = await Question.findOne({
            order: literal("RANDOM()"),
            include: [
                {
                    model: QuestionTranslation,
                    where: {language_code: lang},
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
        });


        if (!randomQuestion) {
            return res.status(404).json({error: "Brak pytań w bazie."});
        }

        // Struktura odpowiedzi
        res.json(randomQuestion);
    } catch (error) {
        console.error("Błąd pobierania losowego pytania:", error);
        res.status(500).json({error: "Wystąpił błąd serwera."});
    }
});

module.exports = router;