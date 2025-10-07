import { StyleSheet } from "react-native";

//
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";

const Profile = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Emails
      </ThemedText>
      <Spacer height={20} />
      <ThemedText>Time to start reading some books</ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
