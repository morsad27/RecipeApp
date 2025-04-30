import { Tabs } from "expo-router";
import { Image, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ED541C",
        tabBarStyle: {
          borderRadius: 50,
          paddingTop: 13,
          marginHorizontal: 100,
          height: 55,
          backgroundColor: "#ffffff",
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          borderWidth: 2,
        },
        tabBarIcon: ({ focused, color }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {focused && (
              <View
                style={{
                  height: 55,
                  width: 55,
                  backgroundColor: "#ED541C",
                  borderRadius: 35,
                  position: "absolute",
                  top: -25,
                }}
              />
            )}
            <Image
              source={
                route.name === "home"
                  ? require("../../assets/images/homeicon.png")
                  : route.name === "favorite"
                  ? require("../../assets/images/favoriteicon.png")
                  : require("../../assets/images/profileicon.png")
              }
              style={{
                width: 30,
                height: 30,
                tintColor: color,
                marginTop: -15
              }}
            />
          </View>
        ),
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
