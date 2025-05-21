import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { router } from 'expo-router';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
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
