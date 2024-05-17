import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";

import DetailScreenContainer from "@/components/DetailScreenContainer";
import {
  EvilIcons,
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { generateRandomQuotes, getRandomColorHex } from "@/utlis";
import { Quotes } from "@/constants/quotes";

const { width, height } = Dimensions.get("window");

const ActivitiesPage = () => {
  const colorSchema = useColorScheme();
  const [readmore, setReadmore] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomQuotes = generateRandomQuotes(Quotes, "Today");
    setQuotes(randomQuotes);
  }, []);

  const handleNextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  const today = new Date();

  const randomColor = useMemo(() => getRandomColorHex(), [currentIndex]);

  return (
    <DetailScreenContainer title="Activities">
      <View style={{ marginTop: 30 }}>
        {/* category buttons */}
        <View>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: colorSchema === "dark" ? "#212330" : "#202020",
              },
            ]}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colorSchema === "dark" ? "#B3B6C4" : "#fff",
              }}
            >
              Save Quotes
            </Text>
          </TouchableOpacity>
        </View>
        {/* activities */}
        <View style={styles.cardContainer}>
          <View
            style={[
              styles.cardShadow,
              {
                backgroundColor: randomColor,
                height: readmore ? height / 1.5 : height / 3,
                transform: [
                  {
                    rotate: "-5deg",
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
                height: readmore ? height / 1.5 : height / 3,
                transform: [
                  {
                    rotate: "4deg",
                  },
                ],
              },
            ]}
          />

          {/* card */}

          <View
            style={[
              styles.card,
              {
                backgroundColor: randomColor,
                height: readmore ? height / 1.5 : height / 3,
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
                  {currentIndex}/{quotes.length}
                </Text>
              )}
            </View>

            {/* content */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                rowGap: 14,
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
                {quotes[currentIndex]?.content}
              </Text>

              {readmore && (
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "PoppinsMedium",
                    color: "#fff",
                  }}
                >
                  {quotes[currentIndex].author}
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
                <MaterialCommunityIcons
                  name="restore"
                  size={30}
                  color={"#fff"}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* next quote button */}
          {!readmore && (
            <TouchableOpacity
              style={styles.reloadBtn}
              onPress={() => handleNextQuote()}
            >
              <FontAwesome6 name="arrow-right-long" size={30} color={"#fff"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </DetailScreenContainer>
  );
};

export default ActivitiesPage;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    padding: 10,
    width: width / 3,
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardShadow: {
    width: width - 50,
    borderRadius: 20,
    opacity: 0.5,
    position: "absolute",
    top: 0,
  },
  card: {
    width: width - 50,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    rowGap: 20,
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
