import {Button, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect, useState} from "react";
import {getRandomQuestion} from "@/api/quiz";
import Pytanie from "@/components/QuizQuestionComponent";

export default function RandomQuestion() {

    const [question, setQuestion] = useState("default")
    const [checkedAnswers, setCheckedAnswers] = useState([false, false, false, false, false, false, false, false]);
    const [modeSwitch, setModeSwitch] = useState(false)
    // false = test, true = sprawdzam

    const pytanko = async () => {
        setQuestion(await getRandomQuestion());
        setCheckedAnswers(Array(8).fill(false))
    };

    useEffect(() => {
        pytanko()
    }, []);

    const zaznaczOdp = (arr: Array<boolean>) => {
        setCheckedAnswers(arr)
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="w-full justify-center items-center align-middle">
                <Pytanie danePytanie={question} onOdpowiedz={zaznaczOdp} mode={modeSwitch}/>
                <TouchableOpacity
                    className="bg-[#841584] m-1 rounded-lg shadow-md"
                    onPress={() => setModeSwitch(!modeSwitch)}>
                    <Text className=" p-4 mx-10 text-white font-bold">Sprawdź</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
