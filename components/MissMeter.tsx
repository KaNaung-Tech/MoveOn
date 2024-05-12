import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MonthYearToggle from "./MonthYearToggle";
import { BarChart, LineChart } from "react-native-gifted-charts";

const WIDTH = Dimensions.get("screen").width;
const barData = [
  { value: 10, label: "Jan", frontColor: "#FF5C00BF" },
  { value: 5, label: "Feb" },
  { value: 3, label: "Mar", frontColor: "#FF5C00BF" },
  { value: 0, label: "Apr" },
  { value: 0, label: "Jun" },
];

const MissMeter = () => {
  const [month, setMonth] = useState(true);
  const [dayCounter, setDayCounter] = useState(true);

  return (
    <View
      style={{
        height: WIDTH / 1.1,
        backgroundColor: "#fff",
        marginTop: 23,
        borderRadius: 30,
        marginHorizontal: 20,
      }}
    >
      <View
        style={{
          paddingHorizontal: 23,
          paddingTop: 27,
          paddingBottom: 18,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Miss Meter</Text>
        <MonthYearToggle toggleSwitch={month} setToggleSwitch={setMonth} />
      </View>
      {month ? (
        <View style={{ marginHorizontal: 20 }}>
          <BarChart
            barWidth={22}
            barBorderRadius={4}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>
      ) : (
        <View style={{ marginHorizontal: 20 }}>
          <Text>Year</Text>
        </View>
      )}
    </View>
  );
};

export default MissMeter;

const styles = StyleSheet.create({});
