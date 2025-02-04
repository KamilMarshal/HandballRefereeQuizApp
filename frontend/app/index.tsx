import {Button, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, Redirect} from "expo-router";

export default function Index() {
  return (
      <SafeAreaView className="h-full">
          <View className="w-full justify-center items-center align-middle">
              <Text className="text-base">Index.jsx</Text>
              <Link href="/login">
              <Button title="Nyy"></Button>
                  </Link>
          </View>
      </SafeAreaView>
  );
}
