import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import React, {useEffect, useState} from "react";
import {getRandomQuestion} from "@/api/quiz";
import {logout} from "@/api/auth";
import {set} from "yaml/dist/schema/yaml-1.1/set";
import Pytanie from "@/components/QuizQuestionComponent";

export default function RandomQuestion() {

    const [question, setQuestion] = useState("default")
    const [checkedAnswers, setCheckedAnswers] = useState([false, false, false, false, false, false, false, false]);
    const pytanko = async () => {
        setQuestion(await getRandomQuestion());
    };

    useEffect(() => {
        pytanko()
    }, []);

    const zaznaczOdp = (arr: Array<boolean>) => {
        setCheckedAnswers(arr)
    }

    return (
        <SafeAreaView className="h-full">
            <View className="w-full justify-center items-center align-middle">
                <Pytanie danePytanie={question} onOdpowiedz={zaznaczOdp}/>
            </View>
        </SafeAreaView>
    );
}
