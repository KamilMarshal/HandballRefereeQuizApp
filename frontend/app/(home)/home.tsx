import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView className="h-full">
            <View className="w-full justify-center items-center align-middle">
                <Text className="text-base mt-5">Home.tsx!</Text>
            </View>
        </SafeAreaView>
    );
}
