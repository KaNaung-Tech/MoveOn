import { Tabs } from "expo-router";
import React from "react";
<<<<<<< HEAD

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Dimensions, useColorScheme } from "react-native";
=======
import { Dimensions } from "react-native";
import { ActivityIcon, HomeIcon, JournalingIcon } from "@/assets/icons";
>>>>>>> 54842aea3d98d913722f1e94e805a772d1eb60cf

const WIDTH = Dimensions.get("screen").width;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          bottom: 27,
          position: "absolute",
          height: WIDTH / 7,
          borderRadius: 30,
<<<<<<< HEAD
          backgroundColor: colorScheme === "dark" ? "#212330" : "#202020",
=======
          backgroundColor: "#212330",
          marginHorizontal: 30,
>>>>>>> 54842aea3d98d913722f1e94e805a772d1eb60cf
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
<<<<<<< HEAD
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="home" size={25} color="#fff" />
          ),
=======
          tabBarIcon: ({ color, focused }) => <HomeIcon />,
>>>>>>> 54842aea3d98d913722f1e94e805a772d1eb60cf
        }}
      />
      <Tabs.Screen
        name="journaling"
        options={{
          headerShown: false,
<<<<<<< HEAD
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="list-alt" size={30} color="#fff" />
          ),
=======
          tabBarLabel: "Journaling",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <JournalingIcon />,
>>>>>>> 54842aea3d98d913722f1e94e805a772d1eb60cf
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: false,
<<<<<<< HEAD
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="qrcode-plus" color="#fff" size={26} />
          ),
=======
          tabBarLabel: "Activity",
          tabBarLabelStyle: { color: "#fff" },
          tabBarIcon: ({ color, focused }) => <ActivityIcon />,
>>>>>>> 54842aea3d98d913722f1e94e805a772d1eb60cf
        }}
      />
    </Tabs>
  );
}
