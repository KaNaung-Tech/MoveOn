import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

type Props = {
  toggleSwitch: boolean;
  setToggleSwitch: () => void;
};

const MonthYearToggle = ({ toggleSwitch, setToggleSwitch }: any) => {
  // const [toggleSwitch, setToggleSwitch] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setToggleSwitch(!toggleSwitch)}
      activeOpacity={0.7}
      style={{
        flexDirection: "row",
        backgroundColor: "#F6F4F9",
        borderRadius: 10,
        height: 33,
        alignItems: "center",
        paddingHorizontal: 6,
      }}
    >
      <View
        style={{
          width: 56,
          height: 27,
          backgroundColor: !toggleSwitch ? "#F6F4F9" : "#FFFFFF",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Month</Text>
      </View>
      <View
        style={{
          width: 56,
          height: 27,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: toggleSwitch ? "#F6F4F9" : "#FFF",
          borderRadius: 8,
        }}
      >
        <Text>Year</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MonthYearToggle;

const styles = StyleSheet.create({});
