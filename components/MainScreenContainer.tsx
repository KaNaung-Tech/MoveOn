import React, { ReactNode } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import { WaveHandIcon } from "@/assets/icons";
import { Colors } from "@/constants/Colors";

type Props = {
  children: ReactNode;
  name: string;
  imageUrl?: string;
};

const MainScreenContainer = ({ children, name, imageUrl }: Props) => {
  const color = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={{}}>
            <View style={styles.nameWaveIconContainer}>
              <Text
                style={[
                  styles.name,
                  {
                    color:
                      color === "dark" ? Colors.dark.text : Colors.light.text,
                  },
                ]}
              >
                Hello, {name ? name : "Hnin Yu"}
              </Text>
              <WaveHandIcon />
            </View>
            <Text
              style={[
                styles.question,
                {
                  color:
                    color === "dark" ? Colors.dark.text : Colors.light.text,
                },
              ]}
            >
              How's your day going?
            </Text>
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
    </SafeAreaView>
  );
};

export default MainScreenContainer;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, marginHorizontal: 20, marginTop: 20 },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameWaveIconContainer: { flexDirection: "row", alignItems: "center" },
  name: {
    fontFamily: "PoppinsSemiBold",
    marginRight: 5,
    fontSize: 23,
    color: "#000",
  },
  question: {
    color: "#000",
    fontWeight: "400",
    fontSize: 13,

    marginTop: 5,
  },
  imageContainer: {
    width: 51,
    height: 51,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
