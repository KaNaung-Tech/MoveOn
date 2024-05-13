import { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from "react-native";

import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import DetailScreenContainer from "@/components/DetailScreenContainer";
import { getRandomColorHex } from "@/utlis/generateColors";

const Categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Boy",
  },
  {
    id: 3,
    name: "Girl",
  },
];

const DEMY = [
  {
    id: 1,
    text: "Meditation",
  },
  {
    id: 2,
    text: "Explore new interests",
  },
  {
    id: 3,
    text: "Make a food tour",
  },
  {
    id: 4,
    text: "Buy New Clothes",
  },
];

const WIDTH = Dimensions.get("screen").width;

const activities = () => {
  const colorSchema = useColorScheme();
  const [selected, setSelected] = useState("All");

  const handleClickCategory = (name: string) => {
    setSelected(name);
  };

  const randomColor = useMemo(() => getRandomColorHex(), [selected]);

  return (
    <DetailScreenContainer image="dd">
      <View style={{ marginTop: 30 }}>
        {/* title */}
        <Text
          style={[
            styles.title,
            { color: colorSchema === "dark" ? "#fff" : "#000" },
          ]}
        >
          Activities
        </Text>

        {/* categories */}
        <View style={styles.categoryContainer}>
          {Categories.map((item) => {
            const { id, name } = item;
            return (
              <TouchableOpacity
                key={id}
                onPress={() => handleClickCategory(name)}
                style={[
                  styles.categoryTag,
                  {
                    backgroundColor:
                      selected === name
                        ? "#212330"
                        : colorSchema === "dark"
                        ? "#171913"
                        : "#FEFEFE",
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily:
                      selected === name ? "PoppinsSemiBold" : "PoppinsMedium",
                    fontSize: 14,
                    color:
                      selected === name
                        ? "#fff"
                        : colorSchema === "dark"
                        ? "#fff"
                        : "#000",
                  }}
                >
                  {name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* card container */}
        <View style={styles.cardContainer}>
          <View
            style={[
              styles.cardShadow,
              {
                backgroundColor: randomColor,

                transform: [
                  {
                    rotate: "-7deg",
                  },
                ],
              },
            ]}
          />
          <View
            style={[
              styles.cardShadow,
              {
                backgroundColor: randomColor,

                transform: [
                  {
                    rotate: "8deg",
                  },
                ],
              },
            ]}
          />
          <View
            style={[
              styles.card,
              {
                backgroundColor: randomColor,
              },
            ]}
          >
            {/* header */}
            <View style={{ gap: 7 }}>
              <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff" }}>
                Week Activities
              </Text>

              <Text style={{ fontSize: 14, color: "#fff" }}>4 activities</Text>
            </View>

            {/* content */}
            <View style={{ gap: 10 }}>
              {DEMY.map((item) => {
                const { id, text } = item;
                return (
                  <View
                    key={id}
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <EvilIcons name="check" size={24} color="#fff" />
                    <Text style={styles.taskText}>{text}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* reload button */}
          <TouchableOpacity style={styles.reloadBtn}>
            <MaterialCommunityIcons name="restore" size={30} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </DetailScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
  },
  categoryContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryTag: {
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 78,
    height: 35,
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardShadow: {
    width: WIDTH - 50,
    borderRadius: 20,
    height: 250,
    opacity: 0.5,
    position: "absolute",
    top: 0,
  },
  card: {
    width: WIDTH - 50,
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 40,
    height: 250,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  taskText: {
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
    fontWeight: "300",
  },
  reloadBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#2A2D3D",
    borderRadius: 40,
    alignItems: "center",
    position: "absolute",
    right: "40%",
    bottom: -20,
    justifyContent: "center",
    zIndex: 1,
  },
});

export default activities;
