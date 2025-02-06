import {Button, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import React from "react";
import {Rule} from "@/components";

export default function Catalogue() {
	return (
		<SafeAreaView className="h-full">
			<View className="w-full justify-center items-center align-middle">
				<ScrollView className="w-full p-2">
					<Text className="text-base mt-5">Catalogue</Text>
					{Array.from({length: 19}, (_, i) => (
						<Rule key={i + 1} nr={i + 1}/>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
