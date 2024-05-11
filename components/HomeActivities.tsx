import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
};

interface DataProps {
  data: Props;
  onPress: () => void;
}

const HomeActivities = ({ data, onPress }: DataProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
        backgroundColor:
          data?.title === "Reading"
            ? "#FFFCE3"
            : data?.title === "Questions"
            ? "#E9FFE3"
            : "#E3E6FF",
      }}
    >
      <View
        style={{
          ...styles.iconContainer,
          borderColor:
            data?.title === "Reading"
              ? "#FFF9C6"
              : data?.title === "Questions"
              ? "#C6FFDD"
              : "#C7C6FF",
          shadowColor:
            data?.title === "Reading"
              ? "#FFF9C6"
              : data?.title === "Questions"
              ? "#C6FFDD"
              : "#C7C6FF",
        }}
      >
        {data?.icon}
      </View>
      <Text style={styles.title}>{data?.title}</Text>
      <Text numberOfLines={2} style={styles.subTitle}>
        {data?.subTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default HomeActivities;

const styles = StyleSheet.create({
  mainContainer: {
    height: 136,

    width: 112,
    borderTopRightRadius: 63,
    borderRadius: 23,
    paddingHorizontal: 13,
    margin: 5,
  },
  iconContainer: {
    width: 51,
    height: 51,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,

    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: { marginTop: 9, color: "#000", fontWeight: "700", fontSize: 16 },
  subTitle: { color: "#757575", fontWeight: "500", fontSize: 11 },
});
