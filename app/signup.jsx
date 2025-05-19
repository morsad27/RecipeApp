//signup
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
import { useState } from "react";
import { router } from "expo-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Signup Successful!");
        router.replace("/(tabs)/home")
      })
      .catch((err) => {
        console.log(err.message);
        Alert.alert(err.message)
      });
  };

  const login = () => {
    router.replace("/");
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* <Image
          source={require("../assets/images/chef.png")}
          style={styles.icon}
        /> */}
        <Text style={styles.textLogin}>RecipeRealm</Text>
      </View>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Create you account</Text>
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
        <TextInput
          placeholder="Comfirm Password"
          style={styles.inputField}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.greyText}>Already have an account? </Text>
        <Text style={styles.blueText} onPress={login}>Login</Text>
      </View>
      <TouchableOpacity
        onPress={register}
        style={[defaultStyles.btn, styles.btnPrimary]}
      >
        <Text style={styles.btnPrimaryText}>Signup</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={[defaultStyles.btn, styles.btnDark]}>
        <Text style={styles.btnDarkText}> Continue with Google </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Signup;

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
