import {Button, Text, View} from "react-native";
import {router} from "expo-router";
import React from "react";

const Rule = (props: {nr: number}) => {

	return (
		<View className="p-4 w-full">
            <Text>Whole Rule nr {props.nr} </Text>
			{Array.from({length: 10}, (_, i) => (
					<Text key={i + 1}>Pytanie {i+1}</Text>
				))}
        </View>
	)
}

export default Rule;