import { Text, View } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect} from "expo-router";

export default function Login() {
  return (
      <SafeAreaView className="h-full">
          <View className="w-full justify-center items-center align-middle">
              <Text className="text-base">Login.jsx</Text>
          </View>
      </SafeAreaView>
  );
}
