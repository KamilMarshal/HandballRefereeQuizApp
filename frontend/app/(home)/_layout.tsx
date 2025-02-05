import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
      <Tabs.Screen name="home" options={{ title: 'Strona główna' }} />
      <Tabs.Screen name="quizzes" options={{ title: 'Quizy' }} />
      <Tabs.Screen name="stats" options={{ title: 'Statystyki' }} />
      <Tabs.Screen name="settings" options={{ title: 'Ustawienia' }} />
    </Tabs>
  );
}
