import { Tabs } from "expo-router";
import { Image, View } from "react-native";

export default function layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ED541C",
        borderRadius: 50,
        tabBarStyle: {
          borderRadius: 50,
          paddingTop: 15,
          height: 80,
          backgroundColor: "#ffffff",
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          borderWidth: 2,
          marginHorizontal: 90,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Segoe UI",
          fontWeight: "bold",
          paddingTop: 5,
        },
        tabBarIcon: ({ focused, color }) => (
          <View style={{ alignItems: "center" }}>
            {/* Line  */}
            {focused && (
              <View
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: "#ED541C",
                  borderRadius: 50,
                  marginBottom: 5,
                  marginBottom: -60
                }}
              />
            )}
            {/*tab icon */}
            <Image
              source={
                route.name === "home"
                  ? require("../../assets/images/homeicon.png")
                  : route.name === "favorite"
                  ? require("../../assets/images/favoriteicon.png")
                  : require("../../assets/images/profileicon.png")
              }
              style={{ width: 50, height: 50, tintColor: color }}
            />
          </View>
        ),
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          headershown: true,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          headershown: true,
          title: "Favorite",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headershown: true,
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
