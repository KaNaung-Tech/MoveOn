import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WavehandSvg from "@/components/svgs/Wavehand";
import CustomHeader from "@/components/CustomHeader";

const Activity = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />

      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({});
