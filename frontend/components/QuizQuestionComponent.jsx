import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";

const Pytanie = ({danePytanie, onOdpowiedz}) => {
    const [checkedAnswers, setCheckedAnswers] = useState([false, false, false, false, false, false, false, false]);

    useEffect(() => {
        setCheckedAnswers([false, false, false, false, false, false, false, false]);
    }, [danePytanie]);

    if (!danePytanie || !danePytanie.QuestionTranslations?.[0]) {
        return <Text>Brak pytania...</Text>;
    }

    const {question_text, answer_a, answer_b, answer_c, answer_d, answer_e, answer_f, answer_g, answer_h} =
        danePytanie.QuestionTranslations[0];

    const handleOdpowiedz = (index) => {
        setCheckedAnswers(prevState => {
            const newState = [...prevState];
            newState[index] = !prevState[index];
            return newState;
        });
        onOdpowiedz(checkedAnswers);
        console.log("checkedAnswers = " + checkedAnswers);
    };

    return (
        <View className="p-4 bg-white rounded-lg shadow-md">
            <Text className="text-lg font-bold mb-3">{question_text}</Text>
            <TouchableOpacity className="" onPress={() => handleOdpowiedz(0)}>
                <Text className={`p-2 border-2 ${checkedAnswers[0] === true ? "color-red-600" : ""}`}>
                    A: {answer_a}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOdpowiedz(1)}>
                <Text className={`p-2 ${checkedAnswers[1] === true ? "text-red-600" : ""}`}>
                    B: {answer_b}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOdpowiedz(2)}>
                <Text className={`p-2 ${checkedAnswers[2] === true ? "bg-blue-300" : ""}`}>
                    C: {answer_c}
                </Text>
            </TouchableOpacity>
            {answer_d && (
                <TouchableOpacity onPress={() => handleOdpowiedz(3)}>
                    <Text className={`p-2 ${checkedAnswers[3] === true ? "bg-blue-300" : ""}`}>
                        D: {answer_d}
                    </Text>
                </TouchableOpacity>
            )}
            {answer_e && (
                <TouchableOpacity onPress={() => handleOdpowiedz(4)}>
                    <Text className={`p-2 ${checkedAnswers[4] === true ? "bg-blue-300" : ""}`}>
                        E: {answer_e}
                    </Text>
                </TouchableOpacity>
            )}
            {answer_f && (
                <TouchableOpacity onPress={() => handleOdpowiedz(5)}>
                    <Text className={`p-2 ${checkedAnswers[5] === true ? "bg-blue-300" : ""}`}>
                        F: {answer_f}
                    </Text>
                </TouchableOpacity>
            )}
            {answer_g && (
                <TouchableOpacity onPress={() => handleOdpowiedz(6)}>
                    <Text className={`p-2 ${checkedAnswers[6] === true ? "bg-blue-300" : ""}`}>
                        G: {answer_g}
                    </Text>
                </TouchableOpacity>
            )}
            {answer_h && (
                <TouchableOpacity onPress={() => handleOdpowiedz(7)}>
                    <Text className={`p-2 ${checkedAnswers[7] === true ? "color-red-600" : ""}`}>
                        H: {answer_h}
                    </Text>
                </TouchableOpacity>
            )}

        </View>
    );
};

export default Pytanie;
