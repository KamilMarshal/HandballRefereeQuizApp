import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Strona główna' }} />
      <Tabs.Screen name="quiz" options={{ title: 'Quizy' }} />
      <Tabs.Screen name="catalogue" options={{ title: 'Katalog pytań' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil' }} />
    </Tabs>
  );
}
