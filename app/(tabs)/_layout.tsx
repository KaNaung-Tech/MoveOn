import { Tabs } from "expo-router";
import React from "react";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          width: 288,
          bottom: 30,
          height: 56,
          borderRadius: 30,
          alignSelf: "center",
          backgroundColor: "#212330",
        },
        tabBarItemStyle: {
          height: 45,
          borderRadius: 30,
          paddingHorizontal: 20,
          marginTop: 5,
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
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journaling"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="list-alt" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="qrcode-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs>
  );
}
