import {Text, Button, View} from 'react-native';
import {router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function QuizTabScreen() {
  return (
    <SafeAreaView className="items-center">
      <Text className="p-4">Strona Quizów</Text>
        <View className="pb-4 w-[80%]">
            <Button title="Rozwiąż losowe pytanie" onPress={() => {router.push('/home/quiz/random')}} color="red"/>
        </View>
        <View className="pb-4 w-[80%]">
            <Button title="Rozwiąż egzamin 25 pytań" onPress={() => {router.push('/home/quiz/exam')}} color="blue"/>
        </View>
        <View className="pb-4 w-[80%]">
            <Button title="Przeglądaj katalog" onPress={() => {router.push('/home/catalogue')}} color="green"/>
        </View>
    </SafeAreaView>
  );
}
