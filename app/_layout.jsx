import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
