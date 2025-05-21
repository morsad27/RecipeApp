import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';

const Home = () => {
  const handleLogout = async () => {
    try {
      await auth().signOut(); // Firebase logout
      await GoogleSignin.signOut(); // Google logout
      router.replace("/"); // back to login
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
