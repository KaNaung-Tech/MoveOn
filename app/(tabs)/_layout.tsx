import React from "react";
import { Tabs } from "expo-router";

import { Dimensions, useColorScheme } from "react-native";

import { ActivityIcon, HomeIcon, JournalingIcon } from "@/assets/icons";

const WIDTH = Dimensions.get("screen").width;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: WIDTH / 1.2,
          backgroundColor: colorScheme === "dark" ? "#212330" : "#202020",
          bottom: 27,
          position: "absolute",
          height: WIDTH / 7,
          borderRadius: 30,
          marginHorizontal: 30,
        },
        tabBarItemStyle: {
          borderRadius: 30,
          padding: 10,
          marginVertical: 5,
          marginHorizontal: 5,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarActiveBackgroundColor:
          colorScheme === "dark" ? "#2A2D3D" : "#363636",
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
          title: "Journaling",
          headerShown: false,

          tabBarLabel: "Journaling",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <JournalingIcon />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,

          tabBarLabel: "Activity",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <ActivityIcon />,
        }}
      />
    </Tabs>
  );
}
