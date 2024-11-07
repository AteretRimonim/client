import {
  Alert,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { LoginRequest } from "@/types/userType";
import userStore from "@/store/userStore";
import { login } from "@/api/userApi";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

/**
 * Initiates the login process, updates loading state, and sets messages.
 * 
 * Calls `loginUser` in `userStore` and displays a success or error message 
 * based on the login result. Resets loading state at the end.
 */
  const handleLogin = async () => {
    setLoading(true);
    const loginData: LoginRequest = { password, email };
    try {
      const token = await login(loginData);
      setMessage('Logged in with token:' + token);
  } catch (err) {
    setMessage('Login failed. Please check your credentials.');
  }
    // try {
    //     await userStore.loginUser(loginData);
        
    //     if (userStore.isLoggedIn) {
    //         setMessage(`Login successful! Welcome, ${userStore.user?.userName}`);
    //     } else {
    //         setMessage(userStore.loginError);
    //     }
    // } catch (error) {
    //     setMessage("An error occurred while logging in.");
    // } 
    finally {
        setLoading(false);
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>login Component</Text>
      <Text style={styles.label}>email:</Text>
      <Input
        fieldType="text"
        value={email}
        onChangeText={setEmail}
        placeholder=" email"
      />

      <Text style={styles.label}>password:</Text>
      <Input
        fieldType="password"
        value={password}
        onChangeText={setPassword}
        placeholder="סיסמא"
      />
      <Button title="Login" onPress={handleLogin} disabled={loading} />
      {message && (
                <Text
                    style={[
                        styles.messageText,
                        userStore.isLoggedIn ? styles.successText : styles.errorText
                    ]}
                >
                    {message}
                </Text>
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // backgroundColor: '#f8f8f8',
    // direction: "rtl",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    textAlign: "right",
    width: "100%",
  },
  messageText: {
    
    fontSize: 16,
},
successText: {
    color: "green",
},
errorText: {
    color: "red",
},
});
