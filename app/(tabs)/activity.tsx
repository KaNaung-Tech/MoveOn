import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { Octicons } from "@expo/vector-icons";

import MainScreenContainer from "@/components/MainScreenContainer";
import { LoveIcon, SaveIcon } from "@/assets/icons";

const ACTIVITES = [
  {
    id: 1,
    title: "Reading",
    subTitle: "positive affirmations & quotes",
    icon: SaveIcon,
    route: "/activities/reading",
  },
  {
    id: 2,
    title: "Activities",
    subTitle: "Suggest activities for a week",
    icon: LoveIcon,
    route: "/activities/activities",
  },
];

const Activity = () => {
  return (
    <MainScreenContainer name="Nyein Min">
      <View
        style={{
          marginTop: 10,
        }}
      >
        <View style={{ marginVertical: 40 }}>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/activity-card/activity-card.png")}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: "PoppinsSemiBold" }}>
            Find Activities
          </Text>

          <View style={{ marginTop: 20, rowGap: 20 }}>
            {ACTIVITES.map((item) => {
              const { id, title, subTitle, icon: Icon } = item;

              return (
                <TouchableOpacity
                  key={id}
                  style={styles.activity}
                  onPress={() => {
                    router.push(item.route);
                  }}
                >
                  <Icon width={25} height={25} />
                  <View style={{ gap: 5 }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 16,
                        color: "#0A0909",
                      }}
                    >
                      {title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#9B9B9B",
                      }}
                    >
                      {subTitle}
                    </Text>
                  </View>

                  <Octicons name="chevron-right" size={20} color="#9B9B9B" />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </MainScreenContainer>
  );
};

const styles = StyleSheet.create({
  activity: {
    marginBottom: 10,
    backgroundColor: "#F8F8F6",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: 72,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Activity;
