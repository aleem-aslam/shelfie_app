import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>

      <Spacer height={20} />

      <ThemedText>Reading List App</ThemedText>

      <Spacer height={20} />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Spacer height={15} />
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Spacer height={20} />
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    size: 30,
  },
  link: {
    borderBottomWidth: 1,
  },
});
