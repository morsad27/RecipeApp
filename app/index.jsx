import { Link, router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Get Started Page</Text>
      <Link href={"/home"}>go to home</Link>
    </View>
  );
}
