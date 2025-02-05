import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, Redirect, router} from "expo-router";

export default function Index() {
  return (
      <SafeAreaView className="h-full">
          <View className="w-full justify-center items-center align-middle">
              <Text className="text-base mt-5">Handball Referee Quiz App!</Text>
              <Text className="text-base my-5">Index.jsx</Text>
              <Button title="Login" onPress={() => {
                  router.push('/login')
              }}/>
          </View>
      </SafeAreaView>
  );
}
