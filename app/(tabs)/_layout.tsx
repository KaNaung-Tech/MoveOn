import { Tabs } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import { ActivityIcon, HomeIcon, JournalingIcon } from "@/assets/icons";

const WIDTH = Dimensions.get("screen").width;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          bottom: 27,
          position: "absolute",
          height: WIDTH / 7,
          borderRadius: 30,
          backgroundColor: "#212330",
          marginHorizontal: 30,
        },
        tabBarItemStyle: {
          borderRadius: 30,
          padding: 10,
          marginVertical: 5,
          marginHorizontal: 5,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarActiveBackgroundColor: "#363636",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#fff" },
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="journaling"
        options={{
          headerShown: false,
          tabBarLabel: "Journaling",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <JournalingIcon />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          tabBarLabel: "Activity",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <ActivityIcon />,
        }}
      />
    </Tabs>
  );
}
