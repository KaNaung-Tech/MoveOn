import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { getRandomColorHex } from "@/utlis";

interface Props {
  index: number;
  readmore: boolean;
  setReadmore: Dispatch<SetStateAction<boolean>>;
  item: Quote;
  length: number;
  currentIndex: number;
}

const WIDTH = Dimensions.get("screen").width;

const QuoteCard = ({
  index,
  readmore,
  setReadmore,
  item,
  currentIndex,
  length,
}: Props) => {
  const randomColor = useMemo(() => getRandomColorHex(), [index, item]);
  const today = useMemo(() => new Date(), []);

  return (
    <View
      style={[
        styles.container,
        {
          height: readmore ? 500 : 250,
          backgroundColor: randomColor,
          right: readmore
            ? 10
            : currentIndex === index
            ? 10
            : currentIndex + 1 === index
            ? "-5%"
            : currentIndex + 2 === index
            ? "-13%"
            : 10,
          zIndex:
            index === currentIndex
              ? 1
              : currentIndex + 1 === index
              ? -1
              : currentIndex + 2 === index
              ? -2
              : 0,
          transform: [
            {
              scale:
                currentIndex === index
                  ? 1
                  : currentIndex + 1 === index
                  ? 0.9
                  : currentIndex + 2 === index
                  ? 0.8
                  : 0.7,
            },
          ],
        },
      ]}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "400", color: "#fff" }}>
          {today.toDateString()}
        </Text>

        {readmore ? (
          <TouchableOpacity>
            <EvilIcons name="heart" size={35} color="#fff" />
          </TouchableOpacity>
        ) : (
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: "#fff",
            }}
          >
            {currentIndex}/{length}
          </Text>
        )}
      </View>

      {/* content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: readmore ? "80%" : "auto",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "PoppinsSemiBold",
            color: "#fff",
          }}
          numberOfLines={readmore ? 0 : 3}
        >
          {item.content}
        </Text>

        {readmore && (
          <Text
            style={{ fontSize: 15, fontFamily: "PoppinsMedium", color: "#fff" }}
          >
            {item.author}
          </Text>
        )}
      </ScrollView>

      {/* footer */}
      {!readmore ? (
        <TouchableOpacity
          onPress={() => setReadmore(!readmore)}
          style={{ flexDirection: "row" }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#fff",
            }}
          >
            Read More
          </Text>

          <Feather name="arrow-up-right" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setReadmore(!readmore)}
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <MaterialCommunityIcons name="restore" size={30} color={"#fff"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 50,
    borderRadius: 20,
    justifyContent: "space-between",
    padding: 20,
    paddingHorizontal: 40,
    position: "absolute",
    top: 10,
  },
});

export default QuoteCard;
