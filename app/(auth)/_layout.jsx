import { Stack } from "expo-router";
import { StatusBar } from "react-native-web";

const AuthLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default AuthLayout;
