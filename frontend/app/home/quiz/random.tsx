import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import React from "react";

export default function RandomQuestion() {
    return (
        <SafeAreaView className="h-full">
            <View className="w-full justify-center items-center align-middle">
                <Text className="text-base mt-5">Random Question</Text>

            </View>
        </SafeAreaView>
    );
}
