import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, Redirect, router, useFocusEffect} from "expo-router";
import {useEffect} from "react";
import {checkAuth} from "@/api/auth";

export default function Index() {
    useFocusEffect(() => {
    const verifyUser = async () => {
      const authStatus = await checkAuth();
      if (authStatus) router.replace('/home')
    };
    verifyUser();
  });
  return (
      <SafeAreaView className="h-full">
          <View className="w-full justify-center items-center align-middle">
              <Text className="text-base mt-5">Handball Referee Quiz App!</Text>
              <Text className="text-base my-5">Pierwsze okno</Text>
              <Button title="Zaloguj się" onPress={() => {
                  router.push('/login')
              }}/>
          </View>
      </SafeAreaView>
  );
}
