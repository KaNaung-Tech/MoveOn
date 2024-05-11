import React from "react";
import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";

import WavehandSvg from "./svgs/Wavehand";

const CustomHeader = () => {
  const color = useColorScheme();

  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        flexDirection: "row",
        marginHorizontal: 20,
      }}
    >
      <View>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
        >
          <Text style={{ fontWeight: "600", fontSize: 24 }}>
            Hello , Nyein Min
          </Text>
          <WavehandSvg width={20} height={20} />
        </View>
        <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>
          How's your day going?
        </Text>
      </View>

      <View>
        <Image
          resizeMode="contain"
          style={{ width: 51, height: 51 }}
          source={require("../assets/images/profile.png")}
        />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
