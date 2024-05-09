import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/(user)"> go to profile</Link>
      <Link href="/journaling/[mode]"> go to journaling</Link>
      <Link href="/(user)/setting"> go to setting</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
