import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, Redirect, router} from "expo-router";
import {logout} from "@/api/auth";
import React from "react";

export default function Profile() {
    const handleLogout = async () => {
        await logout();
        router.replace('/');
    };
    return (
        <SafeAreaView className="h-full">
            <View className="w-full justify-center items-center align-middle">
                <Text className="text-base mt-5">Handball Referee Quiz App!</Text>
                <Text className="text-base my-5">Profile.jsx</Text>
                <Button title="Wyloguj" onPress={handleLogout}/>

            </View>
        </SafeAreaView>
    );
}
