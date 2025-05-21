import { Button, StyleSheet, Text, View } from "react-native";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

const profile = () => {
  const handleLogout = async () => {
    try {
      await getAuth().signOut();
      await GoogleSignin.signOut();
      router.replace("/");
    } catch (error) {
      console.error("Logout failed", error);
      Alert.alert("Logout Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Page</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
