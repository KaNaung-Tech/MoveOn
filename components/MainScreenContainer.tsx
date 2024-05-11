import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { WaveHandIcon } from "@/assets/icons";

type Props = {
  children: ReactNode;
  name: string;
  imageUrl: string;
};

const MainScreenContainer = ({ children, name, imageUrl }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View>
          <View style={styles.nameWaveIconContainer}>
            <Text style={styles.name}>Hello, {name ? name : "Hnin Yu"}</Text>
            <WaveHandIcon />
          </View>
          <Text style={styles.question}>How's your day going?</Text>
        </View>
        {!imageUrl ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              console.log("Go to profile page!");
            }}
            style={styles.imageContainer}
          >
            {/* base 64 data here */}
            <Image source={require("@/assets/images/girl.png")} />
          </TouchableOpacity>
        ) : (
          <View style={styles.imageContainer}></View>
        )}
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default MainScreenContainer;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, marginHorizontal: 20 },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameWaveIconContainer: { flexDirection: "row", alignItems: "center" },
  name: {
    color: "#000",
    fontWeight: "600",
    marginRight: 5,
    fontSize: 20,
  },
  question: {
    color: "#000",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 5,
  },
  imageContainer: {
    width: 51,
    height: 51,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
