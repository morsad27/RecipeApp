import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../constants/Styles";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "701124826277-55fipficf2pa0rcfep62rbhf24islop5.apps.googleusercontent.com",
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();

      if (!idToken) throw new Error("Google Sign-In failed, no idToken.");

      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(getAuth(), googleCredential);
      router.replace("/(tabs)/home");
    } catch (err) {
      console.error("Google Sign-In Error:", err.message);
      Alert.alert("Google Login failed", err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        router.replace("/(tabs)/home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        Alert.alert("Login Successful!");
        router.replace("/(tabs)/home");
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert(error.message);
      });
  };

  const register = () => {
    router.replace("/signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textLogin}>RecipeRealm</Text>
      </View>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome back</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          placeholder="Email"
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.greyText}> Don't have an account? </Text>
        <Text style={styles.blueText} onPress={register}>
          Signup
        </Text>
      </View>

      <TouchableOpacity
        onPress={signIn}
        style={[defaultStyles.btn, styles.btnPrimary]}
      >
        <Text style={styles.btnPrimaryText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log("Signed in with Google!")
          )
        }
        style={[defaultStyles.btn, styles.btnDark]}
      >
        <Text style={styles.btnDarkText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 75,
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textLogin: {
    color: "#000",
    fontWeight: "800",
    fontSize: 34,
    textDecorationLine: "underline",
  },
  icon: {
    height: 48,
    width: 48,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: "10%",
  },
  logo: {
    alignSelf: "center",
    marginVertical: 20,
    height: 90,
    width: 154,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputField: {
    marginVertical: 4,
    height: 65,
    borderWidth: 1,
    borderColor: "#ED541C",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
    minWidth: "80%",
  },
  greyText: {
    color: "#707070",
    fontSize: 18,
  },
  blueText: {
    color: "#06f",
    fontSize: 18,
    fontWeight: 500,
  },
  btnPrimary: {
    backgroundColor: "#ED541C",
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 16,
  },
  btnDarkText: {
    color: "#000",
    fontSize: 20,
  },
  btnIcon: {
    paddingRight: 7,
  },
});
