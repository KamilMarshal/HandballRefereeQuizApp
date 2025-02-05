import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { checkAuth, login } from "@/api/auth";
import {router} from "expo-router";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      const authStatus = await checkAuth();
      setIsLoggedIn(authStatus);
    };
    verifyUser();
  }, []);

  const handleLogin = async () => {
    const success = await login("KamilM", "qwerty");
    console.log("(frontend) handleLogin: success =",success)
    setIsLoggedIn(success);
  };

  return (
    <View>
      {isLoggedIn ? (<>
          <Text>Udało się zalogować!</Text>
        <Button title="Login" onPress={() => {
                  router.push('/home')
              }}/>
          </>
      ) : (
        <>
          <Text>🔑 Zaloguj się</Text>
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};