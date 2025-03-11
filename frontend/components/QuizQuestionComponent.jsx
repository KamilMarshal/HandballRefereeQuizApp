import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";

const Pytanie = ({ danePytanie, onOdpowiedz, mode }) => {
    if (!danePytanie || !danePytanie.QuestionTranslations?.[0]) {
        return <Text>Brak pytania...</Text>;
    }
    const [checkedAnswers, setCheckedAnswers] = useState(Array(8).fill(false));

    useEffect(() => {
        setCheckedAnswers(Array(8).fill(false))
    }, [danePytanie]);

    const { question_text, answer_a, answer_b, answer_c, answer_d, answer_e, answer_f, answer_g, answer_h } =
        danePytanie.QuestionTranslations[0];

    const answers = [answer_a, answer_b, answer_c, answer_d, answer_e, answer_f, answer_g, answer_h];
    const hint = danePytanie

    const handleOdpowiedz = (index) => {
        setCheckedAnswers(prevState => {
            const newState = [...prevState];
            newState[index] = !prevState[index];
            onOdpowiedz(newState)
            return newState;
        });
    };

    return (
        <View className="p-4 w-full">
            <Text className="text-lg font-bold my-3">[{danePytanie.question_number}] {question_text}</Text>
            {answers.map((answer, index) => (
                answer && (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleOdpowiedz(index)}
                        className={`p-3 my-1 rounded-lg ${
                            checkedAnswers[index] ? "bg-blue-500" : "bg-black"
                        }`}
                        disabled={mode}
                    >
                        <Text className="text-white font-semibold">
                            {String.fromCharCode(65 + index)}: {answer}
                        </Text>
                    </TouchableOpacity>
                )
            ))}
            <View>

            </View>
        </View>
    );
};

export default Pytanie;
