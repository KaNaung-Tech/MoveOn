import { Tabs } from "expo-router";
import React from "react";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;

export default function TabLayout() {
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
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journaling"
        options={{
          title: "Journaling",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="list-alt" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
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
