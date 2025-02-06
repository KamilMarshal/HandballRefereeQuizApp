import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";

export default function Exam() {
    return (
        <SafeAreaView className="h-full">
            <View className="w-full justify-center items-center align-middle">
                <Text className="text-base mt-5">Exam 25 questions</Text>

            </View>
        </SafeAreaView>
    );
}
