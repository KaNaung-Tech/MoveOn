import { Tabs } from "expo-router";
import React from "react";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Dimensions, useColorScheme } from "react-native";

const WIDTH = Dimensions.get("screen").width;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: WIDTH / 1.2,
          bottom: 27,
          position: "absolute",
          height: 56,
          left: 30,
          borderRadius: 30,
          backgroundColor: colorScheme === "dark" ? "#212330" : "#202020",
        },
        tabBarItemStyle: {
          height: 45,
          borderRadius: 30,
          paddingHorizontal: 20,
          marginTop: 5,
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
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={25} color="#fff" />
          ),
        }}
      />
      <Tabs.Screen
        name="journaling"
        options={{
          title: "Journaling",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="list-alt" size={30} color="#fff" />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="qrcode-plus" color="#fff" size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
