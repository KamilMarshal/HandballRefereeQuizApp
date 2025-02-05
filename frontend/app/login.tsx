import React, { useEffect, useState } from "react";
import {View, Text, Button, TextInput} from "react-native";
import {checkAuth, login, logout} from "@/api/auth";
import {Redirect, router} from "expo-router";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('KamilM');
  const [password, setPassword] = useState('qwerty');

  useEffect(() => {
    const verifyUser = async () => {
      const authStatus = await checkAuth();
      setIsLoggedIn(authStatus);
    };
    verifyUser();
  }, []);

  useEffect(() => {
    if (isLoggedIn)
      setTimeout(() => {
        router.replace('/home')
      }, 500)
  }, [isLoggedIn]);

  const handleLogin = async (user: string, pass: string) => {
    console.log(username, password)
    const success = await login(user, pass);
    console.log("(frontend) handleLogin: success =",success)
    setIsLoggedIn(success);
  };

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <View>
      {isLoggedIn ? (
          <>
            <Text className="p-4">Udało się zalogować!</Text>
          </>
      ) : (
        <>
          <Text>🔑 Zaloguj się</Text>

          <Text>Username:</Text>
          <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
              defaultValue="KamilM"
          />
          <Text>Password:</Text>
          <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry
              defaultValue="qwerty"
          />

          <Button title="cons" onPress={() => console.log(username, password)} />
          <Button title="Login" onPress={() => handleLogin(username, password)} />
        </>
      )}
    </View>
  );
};