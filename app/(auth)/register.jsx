import { StyleSheet, Pressable, Text, Keyboard } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
//Themed Components
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { TouchableWithoutFeedback } from "react-native-web";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log("Register form Submitted", email, password);
  };
  return (
    <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>
          Register to Your Account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          keyboardType="password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>

        <Spacer />

        <Link href="/login" style={{ textAlign: "center" }}>
          <ThemedText>Login Instead</ThemedText>
        </Link>
      </ThemedView>
    </Pressable>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
