import { Stack } from 'expo-router';

export default function QuizLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="random" />
      <Stack.Screen name="exam" />
    </Stack>
  );
}
