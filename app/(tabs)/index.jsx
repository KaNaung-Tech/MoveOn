import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MainScreenContainer from "@/components/MainScreenContainer";
import { ArrowIcon, HomeScreenIcon } from "@/assets/icons";
import HomeActivities from "@/components/HomeActivities";
import { ACTIVITIES_DATA } from "@/constants/data";

const Home = () => {
  const [missMeter, setMissMeter] = useState(false);

  return (
    <MainScreenContainer>
      <View style={styles.iconContainer}>
        {missMeter ? <HomeScreenIcon /> : ""}
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setMissMeter(!missMeter);
        }}
        style={styles.arrowIconContainer}
      >
        <ArrowIcon />
        <Text style={styles.missMeterText}>Miss Meter</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 37 }}>
        <Text style={styles.activitiesText}>Activities</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ACTIVITIES_DATA}
          renderItem={({ item }) => {
            return (
              <HomeActivities
                data={item}
                onPress={() => console.log("Navigation each route")}
              />
            );
          }}
        />
      </View>
    </MainScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconContainer: { alignItems: "center", marginTop: 31 },
  arrowIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 38,
  },
  missMeterText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 12,
    marginLeft: 18,
  },
  activitiesText: { color: "#000", fontSize: 20, fontWeight: "600" },
});
